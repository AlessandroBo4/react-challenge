import React from "react";
// Operator component
import Operator from "./Operator";
// InputNumber component
import InputNumber from "./InputNumber";
// DeleteBtn component
import DeleteBtn from "./DeleteBtn";
// DisableBtn component
import DisableBtn from "./DisableBtn";

// interface to define Row component props structure
interface RowProps {
  row: {
    id: number; // identifier for the row
    operator: string;
    number: number;
    disabled: boolean; // row state (enabled / disabled)
  };

  // update a row
  updateRow: (id: number, operator: string, number: number) => void;
  // delete a row
  deleteRow: (id: number) => void;
  // toggle row state
  toggleDisableRow: (id: number) => void;
}

// functional component for rendering a row
const Row: React.FC<RowProps> = ({
  row,
  updateRow,
  deleteRow,
  toggleDisableRow,
}) => {
  const handleOperatorChange = (operator: string) => {
    updateRow(row.id, operator, row.number);
  };

  const handleNumberChange = (number: number) => {
    updateRow(row.id, row.operator, number);
  };

  return (
    <li>
      <Operator operator={row.operator} onChange={handleOperatorChange} />

      <InputNumber number={row.number} onChange={handleNumberChange} />

      <DeleteBtn onClick={() => deleteRow(row.id)} />

      <DisableBtn
        disabled={row.disabled}
        onClick={() => toggleDisableRow(row.id)}
      />
    </li>
  );
};

export default Row;
