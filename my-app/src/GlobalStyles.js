import { createGlobalStyle } from 'styled-components';
import lightBackground from './kelly-sikkema-PqqQDpS6H6A-unsplash.jpg';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
     display: grid;
     grid-template-areas:
    'header header header header header header'
    'main main main main main main'
    'section section section section section section '
    'footer footer footer footer footer footer';
     gap: 0.625em;
     font-family: "Roboto", system-ui, sans;
     font-weight: 400;
     font-style: normal;
    padding: 0.625em;
    margin:8px;
    background-image: ${({ theme }) => (theme === 'light' ? `url(${lightBackground})` : 'linear-gradient(#00008B, #000000)')};
    color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#000000')};
    background-size: cover; /* Cover the entire button */
  }
`;

export default GlobalStyle;