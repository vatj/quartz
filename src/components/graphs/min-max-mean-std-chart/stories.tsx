import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Box } from 'rebass';
import MinMaxMeanStdChart, { MinMaxMeanStdChartProps } from './index';

export default {
  title: 'Quartz/MinMaxMeanStdChart',
  component: MinMaxMeanStdChart,
} as Meta;

const Template: Story<MinMaxMeanStdChartProps> = (props) => (
  <Box width="700px">
    <MinMaxMeanStdChart {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  min: 0,
  max: 10,
  mean: 5,
  stdDev: 2,
};
