"use client";
import React from "react";

type SubmitButtonProps = {
  value: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ value }) => {
  const handleSubmit = () => {
    // Handle submit logic here
  };

  return (
    <button type="submit" onClick={handleSubmit}>
      {value}
    </button>
  );
};

export { SubmitButton };
