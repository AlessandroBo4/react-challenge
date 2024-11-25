import React from "react";

// Result component props
interface ResultProps {
  result: number;
}

// final result functional component
const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div className="result">
      Result: <span className="final-number">{result}</span>{" "}
    </div>
  );
};

export default Result;
