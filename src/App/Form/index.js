import { useState } from "react";
import Button from "./Buttons";
import { ButtonType } from "./Buttons/enum.ts";
import { currencies } from "../Currency";
import Fieldset from "../Fieldset";
import { StyledInput, StyledSelect } from "./style";

const Form = ({ calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onReset = (event) => {
    event.preventDefault();
    setAmount("");
    setCurrency(currencies[0].short);
  };

  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <Fieldset title="Dane do przeliczenia">
        <p>
          <label>
            Kwota w PLN:
            <StyledInput
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              min="1"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Wybierz walutę:
            <StyledSelect value={currency} onChange={({ target }) => setCurrency(target.value)}>
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.fullName}
                </option>
              ))}
            </StyledSelect>
          </label>
        </p>
        <Button type={ButtonType.Submit} text="Sprawdz!"></Button>
        <Button type={ButtonType.Reset} text="Reset"></Button>
      </Fieldset>
    </form>
  );
};

export default Form;
