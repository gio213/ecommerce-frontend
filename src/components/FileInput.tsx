type FileInputProps = {
  value?: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const noop = () => {};
export const FileInput = ({ value, onChange = noop }: FileInputProps) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Pick a file</span>
        <span className="label-text-alt">Profile Image</span>
      </div>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
