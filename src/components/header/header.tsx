import React, { FC } from "react";
import { HeaderContainer } from "./header.style";

export interface HeaderProps {
  text?: string;
}

const Page: FC<HeaderProps> = ({ text = "dreadera" }) => {
  return (
    <HeaderContainer>
      <h1>{text}</h1>
    </HeaderContainer>
  );
};

export default Page;
