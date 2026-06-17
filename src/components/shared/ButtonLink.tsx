interface ButtonLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const ButtonLink = ({ href, text, className = "" }: ButtonLinkProps) => {
  return (
    <a href={href} className={`px-6 py-3 rounded-full outline-none
                   relative overflow-hidden  bg-violet-600
                   cursor-pointer transform transition-transform duration-200 hover:scale-103 ${className}`}>
      <span className="relative z-10 text-white ">
        {text}
      </span>
    </a>
  );
};
      