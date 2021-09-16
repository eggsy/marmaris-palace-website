import Link from "next/link";

interface ButtonProps {
  href?: string;
  target?: string;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({ href, target, children }) => {
  let isInternal = false;
  if (href?.startsWith("/") || href?.startsWith("#")) isInternal = true;

  const classes =
    "text-xl font-medium text-white w-full py-2 bg-yellow-500 hover:bg-yellow-600 transition-colors rounded-lg px-8 block";

  const props = {
    target,
    title: children?.toString(),
    className: classes,
  };

  const handleClick = () => {
    console.log("yarra");
    alert("Sorry, this website doesn't have any functionality yet.");
  };

  if (href && isInternal === true)
    return (
      <Link href={href}>
        <a href={href} {...props} onClick={() => handleClick()}>
          {children}
        </a>
      </Link>
    );
  else if (href)
    return (
      <a href={href} {...props} onClick={() => handleClick()}>
        {children}
      </a>
    );
  else return <button className={classes}>{children}</button>;
};

export default Button;
