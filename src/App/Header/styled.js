import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 20px auto;
  text-align: center;
  max-width: 80%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.mirage};
  border-radius: 24px;
  border: 1px solid whitesmoke;
  box-shadow: 2px 2px 10px black;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile600}) {
    width: 100%;
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobile875}) {
    width: 100%;
    max-width: 40%;
  }
`;
