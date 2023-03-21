import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 20px auto;
  text-align: center;
  max-width: 38%;
  width: 100%;
  background-color: hsl(210, 33%, 14%);
  border-radius: 24px;
  border: 1px solid whitesmoke;
  box-shadow: 2px 2px 10px black;
  @media (max-width: 890px) {
    width: 100%;
    max-width: 80%;
  }
`;
