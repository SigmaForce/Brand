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
    <li className={cn("", isActive && "", className)} {...rest}>
      <a href={href}>{children}</a>
    </li>
  );
};
