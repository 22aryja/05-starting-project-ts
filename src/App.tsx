import Header from "./components/Header";
import GreenRectangle from "./components/GreenRectangle";
import Results from "./components/Results";
import { useState, createContext } from "react";

export type Inputs = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

type ContextValue = {
  inputs: Inputs;
  setInputs: (inputs: Inputs) => void; //gpt помог
};

export let MyContext = createContext<ContextValue>({
  //gpt
  inputs: {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  },
  setInputs: () => {},
});

function App() {
  const [inputs, setInputs] = useState<Inputs>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <MyContext.Provider value={{ inputs, setInputs }}>
      <Header />
      <GreenRectangle />
      <Results />
    </MyContext.Provider>
  );
}

export default App;
