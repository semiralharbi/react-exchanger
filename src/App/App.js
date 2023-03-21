import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
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
        <Form calculateResult={calculateResult}></Form>

        <Fieldset title="Twoja kwota to:">
          <Result result={result}></Result>
        </Fieldset>
      </Container>
    </>
  );
}

export default App;
