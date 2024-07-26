"use client";
import React from "react";

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <div
      className="
      cursor-pointer rounded-md text-white focus:ring-2 shadow-lg transform active:scale-x-75 transition-transform flex flex-col p-4 border-2 border-sky-400"
      onClick={onClick}
    >
      <div className="flex w-full gap-4">
        <span>{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ActionCard;
