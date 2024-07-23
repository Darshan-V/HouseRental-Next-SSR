const TenantCard = ({
  title,
  text,
  icon,
  iconContainerClassName = "",
  hasBottomBorder,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
  iconContainerClassName?: string;
  hasBottomBorder?: boolean;
}) => {
  return (
    <div
      className={`flex ${
        hasBottomBorder ? "pb-3 border-b border-[#E3E3E3]" : ""
      }`}
    >
      <div
        className={`flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded-lg shadow-md ${iconContainerClassName}`}
      >
        {icon}
      </div>
      <div className="text-left ml-2.5">
        <p className="text-xs text-gray-600">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TenantCard;
