import { useCurrentDate } from "./useCurrectDate";
import { StyledClock } from "./styled";

export const Clock = () => {
  const date = useCurrentDate();

  return <StyledClock>Dzisiaj jest: {date}</StyledClock>;
};
