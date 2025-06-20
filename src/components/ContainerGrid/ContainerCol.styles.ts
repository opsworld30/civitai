// import { ColSpan } from '@mantine/core';
// import {
//   createStyles,
//   MantineSpacing,
//   MANTINE_SIZES,
//   MantineSize,
//   MantineTheme,
// } from '@mantine/styles';
// import { containerQuery } from '~/utils/mantine-css-helpers';

// interface ColStyles {
//   gutter: MantineSpacing;
//   gutterXs: MantineSpacing;
//   gutterSm: MantineSpacing;
//   gutterMd: MantineSpacing;
//   gutterLg: MantineSpacing;
//   gutterXl: MantineSpacing;
//   columns: number;
//   grow: boolean;
//   offset: number;
//   offsetXs: number;
//   offsetSm: number;
//   offsetMd: number;
//   offsetLg: number;
//   offsetXl: number;
//   span: ColSpan;
//   xs: ColSpan;
//   sm: ColSpan;
//   md: ColSpan;
//   lg: ColSpan;
//   xl: ColSpan;
//   order: React.CSSProperties['order'];
//   orderXs: React.CSSProperties['order'];
//   orderSm: React.CSSProperties['order'];
//   orderMd: React.CSSProperties['order'];
//   orderLg: React.CSSProperties['order'];
//   orderXl: React.CSSProperties['order'];
//   containerName?: string;
// }

// const getColumnFlexBasis = (colSpan: ColSpan, columns: number) => {
//   if (colSpan === 'content') {
//     return 'auto';
//   }
//   if (colSpan === 'auto') {
//     return '0px';
//   }
//   return colSpan ? `${100 / (columns / colSpan)}%` : undefined;
// };

// const getColumnMaxWidth = (colSpan: ColSpan, columns: number, grow: boolean) => {
//   if (grow || colSpan === 'auto' || colSpan === 'content') {
//     return 'unset';
//   }
//   return getColumnFlexBasis(colSpan, columns);
// };

// const getColumnFlexGrow = (colSpan: ColSpan, grow: boolean) => {
//   if (!colSpan) {
//     return undefined;
//   }
//   return colSpan === 'auto' || grow ? 1 : 0;
// };

// const getColumnOffset = (offset: number, columns: number) =>
//   offset === 0 ? 0 : offset ? `${100 / (columns / offset)}%` : undefined;

// const getGutterSize = (gutter: MantineSpacing, theme: MantineTheme) =>
//   typeof gutter !== 'undefined'
//     ? theme.fn.size({ size: gutter, sizes: theme.spacing }) / 2
//     : undefined;

// function getBreakpointsStyles({
//   sizes,
//   offsets,
//   orders,
//   theme,
//   columns,
//   gutters,
//   grow,
//   containerName,
// }: {
//   sizes: Record<MantineSize, ColSpan>;
//   offsets: Record<MantineSize, number>;
//   orders: Record<MantineSize, React.CSSProperties['order']>;
//   gutters: Record<MantineSize, MantineSpacing>;
//   grow: boolean;
//   theme: MantineTheme;
//   columns: number;
//   containerName?: string;
// }) {
//   return MANTINE_SIZES.reduce<Record<string, React.CSSProperties>>((acc, size) => {
//     acc[containerQuery.largerThan(size, containerName)] = {
//       order: orders[size],
//       flexBasis: getColumnFlexBasis(sizes[size], columns),
//       padding: getGutterSize(gutters[size], theme),
//       flexShrink: 0,
//       width: sizes[size] === 'content' ? 'auto' : undefined,
//       maxWidth: getColumnMaxWidth(sizes[size], columns, grow),
//       marginLeft: getColumnOffset(offsets[size], columns),
//       flexGrow: getColumnFlexGrow(sizes[size], grow),
//     };
//     return acc;
//   }, {});
// }

// export default createStyles(
//   (
//     theme,
//     {
//       gutter,
//       gutterXs,
//       gutterSm,
//       gutterMd,
//       gutterLg,
//       gutterXl,
//       grow,
//       offset,
//       offsetXs,
//       offsetSm,
//       offsetMd,
//       offsetLg,
//       offsetXl,
//       columns,
//       span,
//       xs,
//       sm,
//       md,
//       lg,
//       xl,
//       order,
//       orderXs,
//       orderSm,
//       orderMd,
//       orderLg,
//       orderXl,
//       containerName,
//     }: ColStyles
//   ) => ({
//     col: {
//       boxSizing: 'border-box',
//       flexGrow: getColumnFlexGrow(span, grow),
//       order: order as any,
//       padding: getGutterSize(gutter, theme),
//       marginLeft: getColumnOffset(offset, columns),
//       flexBasis: getColumnFlexBasis(span, columns),
//       flexShrink: 0,
//       width: span === 'content' ? 'auto' : undefined,
//       maxWidth: getColumnMaxWidth(span, columns, grow),
//       ...getBreakpointsStyles({
//         sizes: { xs, sm, md, lg, xl },
//         offsets: { xs: offsetXs, sm: offsetSm, md: offsetMd, lg: offsetLg, xl: offsetXl },
//         orders: { xs: orderXs, sm: orderSm, md: orderMd, lg: orderLg, xl: orderXl },
//         gutters: { xs: gutterXs, sm: gutterSm, md: gutterMd, lg: gutterLg, xl: gutterXl },
//         theme,
//         columns,
//         grow,
//         containerName,
//       }),
//     },
//   })
// );
