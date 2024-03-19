type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classname?: string;
  label?: string;
};
export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  classname,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered w-full max-w-xs cursor-pointer ${classname}`}
      value={value}
      onChange={onChange}
    />
  );
};
