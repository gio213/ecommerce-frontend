type SpinnerProps = {
  size: string;
  isLoading: boolean;
};

export const Spinner = ({ size, isLoading }: SpinnerProps) => {
  const sizes = ["xs,sm", "md", "lg"];
  return (
    <>
      {isLoading && (
        <span
          className={`loading loading-spinner loading-${
            sizes.includes(size) ? size : "md"
          }`}
        ></span>
      )}
    </>
  );
};
