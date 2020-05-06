import React, { useState, useEffect } from "react";

const Checkbox = (props) => {
  return <input type='checkbox' {...props} />;
};

const StepItem = (props) => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (event) => setChecked(!checked);

  if (checked) {
    return (
      <div
        style={{
          borderStyle: "solid",
          borderWidth: 0.5,
          borderRadius: 10,
          width: 380,
          marginBottom: 10,
          boxShadow: "1px 1px 1px #9E9E9E",
        }}
      >
        <h6 style={{ marginLeft: 5, marginTop: 3 }}>
          This step will delete in 200 seconds unless you
          <span
            style={{ textDecoration: "underline" }}
            onClick={() => setChecked(false)}
          >
            {" "}
            undo{" "}
          </span>
          or
          <span
            style={{ textDecoration: "underline" }}
            onClick={() => setChecked(false)}
          >
            {" "}
            delete now
          </span>
        </h6>
      </div>
    );
  } else {
    return (
      <div
        style={{
          borderStyle: "solid",
          borderWidth: 0.5,
          borderRadius: 10,
          width: 380,
          marginBottom: 10,
          boxShadow: "1px 1px 1px #9E9E9E",
        }}
      >
        <div style={{ marginLeft: 5 }}>
          <label>
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
            <span> {props.step.event}</span>
          </label>
          <p>{props.step.due_date}</p>
        </div>
      </div>
    );
  }
};

export default StepItem;
