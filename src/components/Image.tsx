type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

export const Image = ({ src, alt, width, height }: ImageProps) => {
  return (
    <img
      className="object-fill w-full h-full shadow-lg rounded-lg
"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
