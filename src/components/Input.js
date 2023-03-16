import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="input-container">
      <div className="label-container">
        <label>{props.name}</label>
        <span>
          <input
            onChange={(e) => props.onChange(e.target.value)}
            className="input-text"
            type="number"
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
          />
          {props.symbol}
        </span>
      </div>
      <input
        onChange={(e) => props.onChange(e.target.value)}
        className="input-range"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
      />
    </div>
  );
};

export default Input;
