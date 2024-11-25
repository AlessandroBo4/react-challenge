import React from "react";

// InputNumber component props
interface InputNumberProps {
  number: number;
  onChange: (number: number) => void;
}

// numeric input functional component
const InputNumber: React.FC<InputNumberProps> = ({ number, onChange }) => {
  return (
    <input
      type="number"
      value={number}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
};

export default InputNumber;
