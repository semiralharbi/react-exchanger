import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  margin: auto;
  margin-top: 10px;
  max-width: 80%;
  width: 100%;
  text-align: center;
  padding: 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.mirage};
  box-shadow: 2px 2px 10px black;
  border: 1px solid white;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile890}) {
    width: 100%;
    max-width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobile875}) {
    width: 100%;
    max-width: 40%;
  }
`;

export const StyledLegend = styled.legend`
  padding: 10px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.color.mirage};
  border-radius: 20px;
  border: 1px solid white;
`;
