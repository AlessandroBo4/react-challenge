import React from "react";

// DisableBtn component props
interface DisableBtnProps {
  disabled: boolean;
  onClick: () => void;
}

// row state toggle button functional component
const DisableBtn: React.FC<DisableBtnProps> = ({ disabled, onClick }) => {
  return (
    <button
      className={`btn ${disabled ? "btn-primary" : "btn-secondary"}`}
      onClick={onClick}
    >
      {disabled ? "Enable" : "Disable"}{" "}
    </button>
  );
};

export default DisableBtn;
