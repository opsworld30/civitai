import type { NumberInputProps } from '@mantine/core';
import { CloseButton, NumberInput, Text } from '@mantine/core';
import { useMergedRef } from '@mantine/hooks';
import { forwardRef, useEffect, useRef } from 'react';
import { constants } from '~/server/common/constants';

type Props = NumberInputProps & {
  format?: 'default' | 'delimited' | 'currency';
  clearable?: boolean;
  onClear?: () => void;
  currency?: string;
};

export const NumberInputWrapper = forwardRef<HTMLInputElement, Props>(
  (
    {
      format = 'delimited',
      clearable,
      onClear,
      onChange,
      value,
      currency = constants.defaultCurrency,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(ref, inputRef);

    const handleClearInput = () => {
      if (!inputRef.current) return;

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set;
      nativeInputValueSetter?.call(inputRef.current, '');

      const ev2 = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(ev2);
    };

    useEffect(() => {
      if (value === undefined || typeof value !== 'number') handleClearInput();
    }, [value]); //eslint-disable-line

    const handleChange = (value: number | string) => {
      onChange?.(value);
    };

    const showCloseButton = clearable && (typeof value === 'number' || !!value);
    const closeButton = (
      <CloseButton
        radius="xl"
        color="gray"
        size="xs"
        variant="filled"
        mr={3}
        onClick={() => {
          handleClearInput();
          onClear?.();
          onChange?.('');
        }}
      />
    );

    const isCurrency = format === 'currency';
    const parsedValue = typeof value === 'number' ? (isCurrency ? value / 100 : value) : 0;

    return (
      <NumberInput
        ref={mergedRef}
        thousandSeparator={format !== 'default'}
        rightSection={
          isCurrency ? <Text size="xs">{currency}</Text> : showCloseButton ? closeButton : null
        }
        rightSectionWidth={isCurrency ? 45 : undefined}
        decimalScale={isCurrency ? 2 : undefined}
        fixedDecimalScale={isCurrency}
        onChange={handleChange}
        value={isCurrency ? (parsedValue ?? 0) / 100 : parsedValue}
        {...props}
      />
    );
  }
);

NumberInputWrapper.displayName = 'NumberInputWrapper';
