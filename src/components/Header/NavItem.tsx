import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type NavItemProps = ComponentProps<"li"> & {
  href: string;
  isActive?: boolean;
};

export const NavItem = ({
  href,
  isActive,
  children,
  className,
  ...rest
}: NavItemProps) => {
  return (
    <li
      className={cn(
        "text-white  transition-all duration-200 ease-in-out",
        isActive && "border-b-2 border-brand-light ",
        className
      )}
      {...rest}
    >
      <a href={href}>{children}</a>
    </li>
  );
};
