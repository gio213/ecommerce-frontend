type SelectInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectInput = ({ value, onChange }: SelectInputProps) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="select select-bordered w-full max-w-xs"
    >
      <option>Select a gender</option>
      <option>Men</option>
      <option>Women</option>
    </select>
  );
};
