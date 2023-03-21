import styled from "styled-components";

export const FormButton = styled.button`
  background-color: hsl(210, 33%, 15%);
  color: #fee715fe;
  border-radius: 20px;
  box-shadow: 1px 1px 6px black;
  margin: 30px;
  width: 30%;
  height: 40px;
  @media (max-width: 890px) {
    width: 60%;
    margin: auto;
    margin-top: 16px;
  }

  &:hover {
    outline: none;
    color: #fee715fe;
    cursor: pointer;
    position: relative;
    z-index: 0;
    background-color: hsl(210, 33%, 24%);
  }
  &:hover::before {
    content: "";
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
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
    background: hsl(210, 33%, 15%);
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
