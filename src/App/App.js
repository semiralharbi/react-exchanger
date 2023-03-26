import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState();
  return (
    <>
      <Header title="Kalkulator walut"></Header>
      <Container>
        <Form setResult={setResult}></Form>
        <Fieldset title="Twoja kwota to:">
          <Result result={result}></Result>
        </Fieldset>
      </Container>
    </>
  );
}

export default App;
