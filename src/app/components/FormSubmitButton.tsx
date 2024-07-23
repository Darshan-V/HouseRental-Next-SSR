const FormSubmitButton = ({
  icon,
  title,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) => {
  return (
    <button
      className=" flex flex-row items-center justify-center w-full h-fit hover:bg-green-400 p-2 rounded-md gap-4 underline underline-offset-4 cursor-pointer  "
      onClick={onClick}
    >
      <span className="">{icon}</span>

      {title}
    </button>
  );
};

export default FormSubmitButton;
