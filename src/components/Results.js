import React from "react";
import "./Results.css";
import ResultCard from "./ResultCard";

const Results = (props) => {
  const styles = ["principle", "emi", "interest", "total"];
  return (
    <div className="results">
      {props.results.map((result, i) => (
        <ResultCard
          key={i}
          style={styles[i]}
          name={result.name || ""}
          value={result.value || 0}
        />
      ))}
    </div>
  );
};

export default Results;
