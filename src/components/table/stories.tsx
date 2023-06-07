import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Box } from 'rebass';
import Table from './index';
import ReadOnlyTable from './read-only';

import dummyValues from './read-only/dummydata.json';
import dummyValuesEditable from './editable/dummydata.json';
import EditableTable from './editable';
import { Button, Checkbox, Select } from '../../index';
import BlurInput from './editable/blur-input';
import { TableCellType, TableHeader, TableRowComponent } from './type';

const meta: Meta<typeof Table> = {
  title: 'Tables',
  component: Table,

  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['read-only'],
      },
      description: 'Type of table',
      defaultValue: { summary: 'read-only' },
    },
  },
};
export default meta;

const headers = [
  {
    identifier: { name: 'away_team_id' },
  },
  {
    identifier: { name: 'score' },
  },
  {
    identifier: { name: 'dummycolumn_test1' },
  },
  {
    identifier: { name: 'dummycolumn_test2' },
  },
  {
    identifier: { name: 'home_team_id' },
  },
];

export const ReadOnly: StoryObj<typeof ReadOnlyTable> = {
  args: {
    values: dummyValues,
    columnHeaders: headers,
  },
  render: (props) => {
    return (
      <Box>
        <ReadOnlyTable
          {...props}
          initialStaticColumn="score"
          actions={[
            {
              label: 'go to stats',
              handler: (column) => {
                console.log(`go to stats of ${column}`);
              },
            },
          ]}
        />
      </Box>
    );
  },
};

export const Editable: StoryObj<typeof EditableTable> = {
  args: {
    values: dummyValuesEditable,
    columnHeaders: headers,
  },
  render: ({ values, columnHeaders }) => {
    const [data, setData] = useState(values);

    const handleRemoveRow = (ind: number) => {
      setData((prevData) => {
        prevData.splice(ind, 1);
        return [...prevData];
      });
    };

    const vals = ['11', true, ['2'], 'dasda', ['2']];

    const addRowVals = columnHeaders.map(
      (header: TableHeader, index: number) => ({
        identifierName: header.identifier.name,
        value: vals[index] as TableCellType,
      }),
    );

    const rowComponents: TableRowComponent[] = [
      {
        identifier: { name: 'away_team_id' },
        render: ({ value, onChange }) => (
          <BlurInput defaultValue={value as string} onChange={onChange} />
        ),
      },
      {
        identifier: { name: 'score' },
        render: ({ value, onChange }) => {
          const handleChange = () => {
            onChange(!(value as boolean));
          };

          return (
            <Checkbox
              ml="8px"
              checked={value as boolean}
              onChange={handleChange}
              variant="gray"
            />
          );
        },
      },
      {
        identifier: { name: 'dummycolumn_test1' },
        render: ({ value, onChange }) => (
          <Select
            value={value as string[]}
            onChange={onChange}
            options={['1', '2']}
            placeholder=""
          />
        ),
      },
      {
        identifier: { name: 'dummycolumn_test2' },
        render: ({ value, onChange }) => (
          <BlurInput defaultValue={value as string} onChange={onChange} />
        ),
      },
      {
        identifier: { name: 'home_team_id' },
        render: ({ value, onChange }) => (
          <Select
            value={value as string[]}
            onChange={onChange}
            options={['1', '2']}
            placeholder=""
          />
        ),
      },
    ];

    const handleChangeData = (
      rowInd: number,
      columnName: string,
      value: string | string[] | boolean,
    ) => {
      setData((data2) => {
        const prevData = data2.slice();
        const cellIndex = prevData[rowInd].findIndex(
          (cell) => cell.identifierName === columnName,
        );
        const cell = prevData[rowInd][cellIndex];
        prevData[rowInd][cellIndex] = { ...cell, value };
        return prevData;
      });
    };

    const handleAddRow = () => {
      setData((prevData) => [...prevData, addRowVals]);
    };

    return (
      <>
        <Button onClick={handleAddRow}>Add</Button>
        <EditableTable
          columnHeaders={columnHeaders}
          values={data}
          rowComponents={rowComponents}
          onChangeData={handleChangeData}
          onDeleteRow={handleRemoveRow}
          actions={[
            {
              label: 'go to stats',
              handler: (column) => {
                console.log(`go to stats of ${column}`);
              },
            },
          ]}
        />
      </>
    );
  },
};
