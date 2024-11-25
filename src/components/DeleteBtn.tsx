import React from "react";

// DeleteBtn component props
interface DeleteBtnProps {
  onClick: () => void;
}

// "Delete" button functional component
const DeleteBtn: React.FC<DeleteBtnProps> = ({ onClick }) => {
  return (
    <button className="btn btn-danger" onClick={onClick}>
      Delete
    </button>
  );
};

export default DeleteBtn;
