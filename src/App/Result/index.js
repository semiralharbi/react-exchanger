import { StyledResult } from "./styled";

const Result = ({ result }) => (
  <StyledResult>
    {!!result && (
      <>
        {result.sourceAmount.toFixed(2)} &nbsp;PLN&nbsp;=&nbsp;
        <strong>{result.targetAmount}&nbsp;</strong>
      </>
    )}
  </StyledResult>
);

export default Result;
