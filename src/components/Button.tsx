type ButtonProps = {
  value?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classname?: string;
  label?: string;
  diasbled?: boolean;
  children?: React.ReactNode;
};
export const Button = ({
  value,
  onClick,
  classname,
  diasbled,
  children,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`btn btn-wid w-fit cursor-pointer ${classname}`}
      value={value}
      onClick={onClick}
      disabled={diasbled}
    >
      {children}
    </button>
  );
};
