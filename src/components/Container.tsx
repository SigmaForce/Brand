import { ComponentProps } from "react";
import { cn } from "../utils/cn";

type ContainerProps = ComponentProps<"div">;

export const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div className={cn("container", className)} {...rest}>
      {children}
    </div>
  );
};
