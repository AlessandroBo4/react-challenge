import React from "react";

// Operator component props
interface OperatorProps {
  operator: string;
  onChange: (operator: string) => void;
}

// operator selection functional component
const Operator: React.FC<OperatorProps> = ({ operator, onChange }) => {
  return (
    <select
      className="form-select"
      value={operator}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
};

export default Operator;
