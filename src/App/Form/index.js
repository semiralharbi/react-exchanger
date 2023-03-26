import { useState } from "react";
import Button from "./Buttons";
import { ButtonType } from "./Buttons/enum.ts";
import Fieldset from "../Fieldset";
import { Failure, StyledInput, StyledSelect, Loading } from "./style";
import { useRates } from "../../Api/ApiClient";

const Form = ({ setResult }) => {
  const rates = useRates();
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = rates.data[currency];
    console.log(rate);
    console.log(currency);
    setResult({ sourceAmount: +amount, targetAmount: amount * rate, currency });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onReset = (event) => {
    event.preventDefault();
    setAmount("");
    setCurrency(rates);
  };
  if (rates.state == "error") {
    return (
      <>
        <form onSubmit={onSubmit} onReset={onReset}>
          <Fieldset title="Dane do przeliczenia">
            <Failure>Error: </Failure>
          </Fieldset>
        </form>
      </>
    );
  }
  if (rates.state == "loading") {
    return (
      <>
        <form onSubmit={onSubmit} onReset={onReset}>
          <Fieldset title="Dane do przeliczenia">
            <Loading>Loading...</Loading>
          </Fieldset>
        </form>
      </>
    );
  }
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
              {Object.keys(rates.data).map((key) => (
                <option key={key} value={key}>
                  {key}
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
