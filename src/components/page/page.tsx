import { FC } from "react";
import { PageContainer } from "./page.style";

export interface PageProps {
  title?: string;
}

const Page: FC<PageProps> = ({ children, title = "dreadera" }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Page;
