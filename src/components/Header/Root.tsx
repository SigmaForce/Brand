import React from "react";
import { cn } from "../../utils/cn";
import { Container } from "../Container";

type HeaderRootProps = {
  children: React.ReactNode;
  className?: string;
};

export const Root = ({ children, className }: HeaderRootProps) => {
  return (
    <Container className={cn("flex justify-between items-center ", className)}>
      {children}
    </Container>
  );
};
