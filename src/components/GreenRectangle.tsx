import UserInput from "./UserInput";
import { useContext } from "react";
import { MyContext } from "./../App";

export default function GreenRectangle() {
  const { inputs, setInputs } = useContext(MyContext);

  const changeData = (e: any, type: string): void => {
    switch (type) {
      case "Initial Investment":
        setInputs({ ...inputs, initialInvestment: +e.target.value }); //без + выводит некорректные данные
        break;
      case "Annual Investment":
        setInputs({ ...inputs, annualInvestment: +e.target.value });
        break;
      case "Expected Return":
        setInputs({ ...inputs, expectedReturn: +e.target.value });
        break;
      case "Duration":
        setInputs({ ...inputs, duration: +e.target.value });
        break;

      default:
        break;
    }
  };
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          label={"Initial Investment"}
          value={inputs.initialInvestment}
          onChange={(e: any) => changeData(e, "Initial Investment")}
        />
        <UserInput
          label={"Annual Investment"}
          value={inputs.annualInvestment}
          onChange={(e: any) => changeData(e, "Annual Investment")}
        />
      </div>
      <div className="input-group">
        <UserInput
          label={"Expected Return"}
          value={inputs.expectedReturn}
          onChange={(e: any) => changeData(e, "Expected Return")}
        />
        <UserInput
          label={"Duration"}
          value={inputs.duration}
          onChange={(e: any) => changeData(e, "Duration")}
        />
      </div>
    </div>
  );
}
