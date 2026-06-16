interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-heading-1 font-semibold text-2xl sm:3xl md:4xl ">
      {children}
    </h1>
  );
};
