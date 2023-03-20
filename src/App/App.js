import "./App.css";
import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Div from "./Div";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Result from "./Result";

import { currencies } from "./Currency";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <>
      <Header title="Kalkulator walut"></Header>
      <Container>
        <Div>
          <Form calculateResult={calculateResult}></Form>
        </Div>
        <Div>
          <Fieldset title="Twoja kwota to:">
            <Result result={result}></Result>
          </Fieldset>
        </Div>
      </Container>
    </>
  );
}

export default App;
