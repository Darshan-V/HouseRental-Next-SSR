"use client";
import React from "react";

interface TextFieldProps {
  label: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  value,
  placeholder,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div
      className={`border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4`}
    >
      <label
        htmlFor={`${type}-input`}
        className={`text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5`}
      >
        {label}
      </label>
      <input
        type={type}
        className={`w-full px-2 pb-1.5 text-primary text-base font-light rounded-md focus:outline-none
`}
        id={`${type}-input`}
        placeholder={placeholder}
      />
    </div>
  );
};

export { TextField };
