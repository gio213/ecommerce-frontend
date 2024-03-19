type CheckBoxProps = {
  checked?: boolean;
  setChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox = ({ checked, setChecked }: CheckBoxProps) => {
  return (
    <input
      onChange={setChecked}
      checked={checked}
      type="checkbox"
      defaultChecked
      className="checkbox checkbox-xs"
    />
  );
};
