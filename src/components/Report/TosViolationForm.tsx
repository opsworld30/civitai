import { Radio, Stack } from '@mantine/core';
import { createReportForm } from '~/components/Report/create-report-form';
import { InputRadioGroup, InputTextArea } from '~/libs/form';
import { reportTosViolationDetailsSchema } from '~/server/schema/report.schema';

const violations = [
  'Depiction of real-person likeness',
  'Graphic violence',
  'False impersonation',
  'Deceptive content',
  'Sale of illegal substances',
  'Child abuse and exploitation',
  'Photorealistic depiction of a minor',
  'Prohibited concepts',
];

export const TosViolationForm = createReportForm({
  schema: reportTosViolationDetailsSchema,
  Element: ({ context }) => {
    const violation = context.form.watch('violation');

    return (
      <>
        <InputRadioGroup name="violation" label="Violation" withAsterisk>
          <Stack>
            {violations.map((value, index) => (
              <Radio key={index} value={value} label={value} />
            ))}
          </Stack>
        </InputRadioGroup>
        {violation === violations[0] && (
          <InputTextArea
            name="comment"
            label="Comment (optional)"
            placeholder="Name of the person or any additional information related to them"
          />
        )}
      </>
    );
  },
});
