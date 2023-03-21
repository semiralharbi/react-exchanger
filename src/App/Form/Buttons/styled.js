import styled from "styled-components";

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.color.mirage};
  color: ${({ theme }) => theme.color.candlelight};
  border-radius: 20px;
  box-shadow: 1px 1px 6px black;
  margin: 30px;
  width: 30%;
  height: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile890}) {
    width: 60%;
    margin: auto;
    margin-top: 16px;
  }

  &:hover {
    outline: none;
    color: ${({ theme }) => theme.color.candlelight};
    cursor: pointer;
    position: relative;
    z-index: 0;
    background-color: ${({ theme }) => theme.color.mirage};
  }
  &:hover::before {
    content: "";
    background: linear-gradient(
      45deg,
      #e60000,
      #e63900,
      #e67300,
      #e6ac00,
      #e6e600,
      #ace600,
      #73e600,
      #39e600,
      #00e600,
      #00e6ac,
      #00e6e6,
      #0073e6,
      #0000e6,
      #7300e6,
      #e600e6,
      #e60073,
      #e60000
    );
    position: absolute;
    top: 0px;
    left: 0px;
    background-size: 400%;
    z-index: -1;
    filter: blur(6px);
    width: calc(100%);
    height: calc(100%);
    animation: glowing 20s linear infinite;
    opacity: 1;
    border-radius: 20px;
  }
  &:hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.color.mirage};
    left: 0;
    top: 0;
    border-radius: 20px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
