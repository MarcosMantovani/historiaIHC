import { createGlobalStyle } from 'styled-components'

export const colors = {
  blackPrimary: '#D4D9D5',
  blackSecondary: '#1C1C22',
  whitePrimary: '#000000',
  whiteSecondary: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1023px',
  tablet: '767px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.blackPrimary};
    color: ${colors.whitePrimary};
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`
