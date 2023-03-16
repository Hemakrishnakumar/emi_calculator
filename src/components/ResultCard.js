import React from "react";
import "./ResultCard.css";

const ResultCard = (props) => {
  const value = props.value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className={`result ${props.style}`}>
      <p>{props.name} :</p>
      <h2>{value}</h2>
    </div>
  );
};

export default ResultCard;
