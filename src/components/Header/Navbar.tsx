import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

// Desc: Navbar component for the header
type NavbarProps = ComponentProps<"ul">;

export const Navbar = ({ children, className, ...rest }: NavbarProps) => {
  return (
    <ul className={cn("flex justify-between gap-8", className)} {...rest}>
      {children}
    </ul>
  );
};
