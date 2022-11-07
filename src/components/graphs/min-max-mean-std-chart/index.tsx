import React from 'react';
import { FC } from 'react';
import { Flex } from 'rebass';
import {
  maxStyle,
  maxStyleLabelBox,
  meanLabelbox,
  meanStyle,
  minStyle,
  minStyleLabelBox,
  statChartLabelBoxLabel,
  statsChartCtn,
  statsChartLine,
  statsChartStyle,
  stddLabelBox,
  stddStyle,
  stdLine,
  stdLineBlackStyle,
} from './styles';

const lineWidth = 200;
export interface MinMaxMeanStdChartProps {
  mean: number;
  stdDev: number;
  min: number;
  max: number;
}

const MinMaxMeanStdChart: FC<MinMaxMeanStdChartProps> = ({
  min,
  max,
  mean,
  stdDev,
}: MinMaxMeanStdChartProps) => {
  const pMean = ((mean - min) * lineWidth) / (max - min);
  const pStdDevDouble = ((stdDev * lineWidth) / (max - min)) * 2;
  const width = '200px';
  const height = '4px';

  return (
    <Flex sx={statsChartStyle()}>
      <Flex sx={statsChartCtn(width)}>
        <Flex sx={statsChartLine(height, width)}>
          <Flex sx={meanStyle(height)} style={{ left: pMean }}>
            <Flex sx={meanLabelbox}>
              <Flex sx={statChartLabelBoxLabel}>mean</Flex>
              <Flex>{mean.toFixed(2)}</Flex>
            </Flex>
          </Flex>

          <Flex sx={minStyle(height)}>
            <Flex sx={minStyleLabelBox}>
              <Flex sx={statChartLabelBoxLabel}>min</Flex>
              <Flex>{min.toFixed(2)}</Flex>
            </Flex>
          </Flex>

          <Flex sx={maxStyle(height)}>
            <Flex sx={maxStyleLabelBox}>
              <Flex sx={statChartLabelBoxLabel}>max</Flex>
              <Flex>{max.toFixed(2)}</Flex>
            </Flex>
          </Flex>

          <Flex sx={stddStyle} style={{ left: pMean }}>
            <Flex sx={stddLabelBox}>
              <Flex sx={stdLine(height)} style={{ width: pStdDevDouble }}>
                <Flex sx={stdLineBlackStyle} />
              </Flex>
              <Flex sx={statChartLabelBoxLabel}>std dev.</Flex>
              <Flex>{stdDev.toFixed(2)}</Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MinMaxMeanStdChart;
