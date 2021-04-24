import { FC } from "react";

import { LinksContainer } from "./links.style";

export interface LinksProps {
  height: number;
  width: number;
}

const Page: FC<LinksProps> = ({ height = 10, width = 10 }) => {
  const sources: string[] = ["discord", "linkedin", "github"];

  return (
    <LinksContainer>
      {sources.map((source) => (
        <img
          alt={source}
          src={`/logo-${source}.svg`}
          key={source}
          height={height}
          width={width}
        />
      ))}
    </LinksContainer>
  );
};

export default Page;
