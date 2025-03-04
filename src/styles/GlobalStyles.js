import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :root {
    --color-primary: #4F46E5;
    --color-primary-dark: #3730A3;
    --color-secondary: #EC4899;
    --color-dark: #0F172A;
    --color-dark-lighter: #1E293B;
    --color-text: #FFFFFF;
    --color-text-secondary: #94A3B8;
    --font-family: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--color-dark);
    color: var(--color-text);
    overflow-x: hidden;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: var(--font-family);
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-dark-lighter);
  }

  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      to bottom,
      rgba(79, 70, 229, 0.5),
      rgba(236, 72, 153, 0.5)
    );
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-image: linear-gradient(
      to bottom,
      rgba(79, 70, 229, 0.8),
      rgba(236, 72, 153, 0.8)
    );
  }
`;

export default GlobalStyles;
