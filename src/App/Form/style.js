import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  box-shadow: 0px 0px 4px white;
  margin: auto;
  margin-top: 10px;
  height: 30px;
  width: 56%;
  text-align-last: center;
  @media (max-width: 890px) {
    width: 60%;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px yellow;
  }
`;

export const StyledSelect = styled.select`
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-radius: 20px;
  box-shadow: 0px 0px 4px white;
  margin: auto;
  margin-top: 10px;
  height: 30px;
  width: 56%;
  text-align-last: center;
  @media (max-width: 890px) {
    width: 60%;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px yellow;
  }
`;
