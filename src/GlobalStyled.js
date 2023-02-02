import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Newsreader", serif;
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
