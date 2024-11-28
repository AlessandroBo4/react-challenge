import { useState } from "react";
// Row component
import Row from "./components/Row";
// AddRowBtn component
import AddRowBtn from "./components/AddRowBtn";
// Result component
import Result from "./components/Result";

// interface for row structure
interface RowType {
  id: number; // unique identifier for the row
  operator: "+" | "-";
  number: number;
  disabled: boolean; // flag to indicate if the row is disabled
}

const App = () => {
  // initial list of rows
  const [rows, setRows] = useState<RowType[]>([
    { id: 1, operator: "+", number: 100, disabled: false },
    { id: 2, operator: "+", number: 30, disabled: false },
    { id: 3, operator: "-", number: 7, disabled: false },
  ]);

  // add a new row
  const addRow = () => {
    const newRow: RowType = {
      id: rows.length + 1,
      operator: "+", // default operator
      number: 0, // default number
      disabled: false, // default row state (enabled)
    };
    setRows([...rows, newRow]); // state updated with the new row
  };

  // update row's operator / number
  const updateRow = (id: number, newOperator: string, newNumber: number) => {
    const updatedRows = rows.map((row) =>
      row.id === id
        ? { ...row, operator: newOperator as "+" | "-", number: newNumber }
        : row
    );
    setRows(updatedRows); // state updated with the modified rows
  };

  // delete a row by its ID
  const deleteRow = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id); // Remove the row with the given ID
    setRows(updatedRows); // Update the state with the remaining rows
  };

  // toggle row state (enabled / disabled)
  const toggleDisableRow = (id: number) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, disabled: !row.disabled } : row
    );
    setRows(updatedRows);
  };

  // calculate the total result (only enabled row)
  const calculateResult = () => {
    return rows
      .filter((row) => !row.disabled)
      .reduce((acc, row) => {
        return row.operator === "+" ? acc + row.number : acc - row.number;
      }, 0); // initial value
  };

  // main component
  return (
    <div className="wrapper">
      <h1>Calculator</h1>
      <AddRowBtn addRow={addRow} />
      <ul>
        {rows.map((row) => (
          <Row
            key={row.id} // key for each row
            row={row} // row data as a prop
            updateRow={updateRow} // updateRow function as a prop
            deleteRow={deleteRow} // deleteRow function as a prop
            toggleDisableRow={toggleDisableRow} // toggleDisableRow function as a prop
          />
        ))}
      </ul>
      <Result result={calculateResult()} />
    </div>
  );
};

export default App;
