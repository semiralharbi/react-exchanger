import { Legend, StyledFieldset, StyledLegend } from "./styled";
const Fieldset = ({ title, children }) => (
  <StyledFieldset>
    <StyledLegend>{title}</StyledLegend>
    {children}
  </StyledFieldset>
);

export default Fieldset;
