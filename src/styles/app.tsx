import styled from "styled-components";

export const AppContainer = styled.body`
  font-family: "Roboto Mono", monospace;

  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  background-color: #0e0e0e;
  user-select: none;

  text-rendering: geometricPrecision;

  overflow: hidden;
  filter: blur(px);
`;

export const IndexContainer = styled.div`
  div {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 100;
    font-size: 25em;
    will-change: transform, opacity;
  }
`;
