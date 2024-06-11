import { useContext } from "react";
import { MyContext } from "../App";
import { calculateInvestmentResults, formatter } from "../util/investment";
import { Inputs } from "../App";
import { AnnualData } from "../util/investment";

export default function Results() {
  let { inputs, setInputs } = useContext(MyContext);
  let {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }: Inputs = inputs;

  let annualData: AnnualData[] = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });
  console.log(annualData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>
              {formatter.format(
                data.valueEndOfYear -
                  initialInvestment -
                  annualInvestment * data.year
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + annualInvestment * data.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
