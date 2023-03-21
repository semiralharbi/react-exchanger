import { useEffect, useState } from "react";
import { Clock } from "../Clock";
import Img from "./Img";
import { StyledHeader } from "./styled";
const Header = ({ title }) => {
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date().toLocaleString()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledHeader>
      <Clock></Clock>
      <h1>{title}</h1>
      <div>
        <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/250px-Flag_of_Poland_%28normative%29.svg.png" />
        <Img src="https://image.freepik.com/darmowe-wektory/ilustracja-flagi-unii-europejskiej_53876-27018.jpg" />
        <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/240px-Flag_of_the_United_States.svg.png" />
        <Img src="https://media.istockphoto.com/vectors/great-britain-flag-vector-id953769750?k=6&m=953769750&s=612x612&w=0&h=K5Fc4D6ykAT84_nCXxI2A7AY7iYeqdsR3e2MiN3--Mo=" />
      </div>
    </StyledHeader>
  );
};

export default Header;
