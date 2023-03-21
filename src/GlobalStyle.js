import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        html {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        line-height: 1.5;
        color: ${({ theme }) => theme.color.candlelight};
        background: url(${({ theme }) => theme.urls.dollars});
        background-repeat: no-repeat;
        background-size: cover;
        }

        *,
        ::after,
        ::before {
        box-sizing: inherit;
        }
`;
