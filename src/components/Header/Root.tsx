import React from "react";
import { Container } from "../Container";

type HeaderRootProps = {
  children: React.ReactNode;
};

export const Root = ({ children }: HeaderRootProps) => {
  return (
    <Container className="flex justify-between items-center h-12">
      {children}
    </Container>
  );
};
