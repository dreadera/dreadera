import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;

        height: 100%;
        
        padding: 0;

        margin: 0;

        background-color: #272727;
        
        text-rendering: geometricPrecision;

        -webkit-font-smoothing: antialiased;

        -moz-osx-font-smoothing: grayscale;

        -webkit-touch-callout: none;

        -webkit-user-select: none;

        -khtml-user-select: none;

        -moz-user-select: none;

        -ms-user-select: none;

        user-select: none;

        overflow: hidden;

        filter: blur(px);
    }
`;

export default GlobalStyle;
