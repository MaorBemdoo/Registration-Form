import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    body{
        background-color: aliceblue;
        font-family: 'Roboto', sans-serif;
    }
    #root{
        display: grid;
        place-items: center;
        height: 100vh;
        width: 100vw;
    }
`