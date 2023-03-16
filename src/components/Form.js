import React, { useState, useEffect } from "react";
import Input from "./Input";
import "./Form.css";

function calculateEmi(principle, tenure, interest) {
  interest = interest / 1200;
  tenure = tenure * 12;
  if (interest === 0) return principle / tenure;
  let emi =
    (principle * interest * Math.pow(1 + interest, tenure)) /
    (Math.pow(1 + interest, tenure) - 1);
  return emi;
}

const Form = (props) => {
  const [amount, setAmount] = useState(3000000);
  const [tenure, setTenure] = useState(20);
  const [interest, setInterest] = useState(8);

  useEffect(() => {
    const emi = calculateEmi(amount, tenure, interest);
    const intr = emi * tenure * 12 - amount;
    const results = [
      {
        name: "Principle",
        value: amount,
      },
      {
        name: "Monthly EMI",
        value: emi,
      },
      {
        name: "Total Interest",
        value: intr,
      },
      {
        name: "Total",
        value: intr + amount,
      },
    ];
    props.onChange(results);
  }, [amount, tenure, interest]);

  calculateEmi(amount, tenure, interest);

  function amountChangeHandler(value) {
    setAmount(+value);
  }

  function tenureChangeHandler(value) {
    setTenure(+value);
  }
  function interestChangeHandler(value) {
    setInterest(+value);
  }
  return (
    <div className="form">
      <h1>Home Loan EMI Calculator</h1>
      <Input
        onChange={amountChangeHandler}
        name="Loan Amount :"
        min="100000"
        max="20000000"
        step="100000"
        symbol="₹"
        value={amount}
      />
      <Input
        onChange={tenureChangeHandler}
        name="Tenure :"
        min="1"
        max="30"
        step="1"
        symbol="Years"
        value={tenure}
      />
      <Input
        onChange={interestChangeHandler}
        name="Interest Rate :"
        min="0"
        max="25"
        step="0.1"
        symbol="%"
        value={interest}
      />
    </div>
  );
};

export default Form;
