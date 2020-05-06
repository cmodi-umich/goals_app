import React, { useState, useEffect } from "react";
import StepItem from "./steps/StepItem";
import StepHeader from "./steps/StepHeader";

const Steps = () => {
  const [steps, setSteps] = useState([
    { event: "Hello", due_date: "1/2/2000", goal_id: "1383259-90" },
    { event: "Hello1", due_date: "1/2/2000", goal_id: "1383259-91" },
    { event: "Hello2", due_date: "1/2/2000", goal_id: "1383259-92" },
    { event: "Hello3", due_date: "1/2/2000", goal_id: "1383259-93" },
  ]);

  const listItems = steps.map((step) => <StepItem step={step} />);

  return (
    <div style={{ marginLeft: 10 }}>
      <StepHeader />
      <div>{listItems}</div>
    </div>
  );
};

export default Steps;
