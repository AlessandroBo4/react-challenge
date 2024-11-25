import React from "react";

// AddRowBtn component props
interface AddRowBtnProps {
  addRow: () => void;
}

// "Add Row" button functional component
const AddRowBtn: React.FC<AddRowBtnProps> = ({ addRow }) => {
  return (
    <button className="btn btn-success" onClick={addRow}>
      Add Row
    </button>
  );
};

export default AddRowBtn;
