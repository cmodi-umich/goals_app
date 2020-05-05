import React from "react";
import { Container } from "reactstrap";
import "./dashboard/DashBoard.css";
import Graphs from "./dashboard/Graphs";
import Steps from "./dashboard/Steps.js";

const DashBoard = (props) => {
  return (
    <div className='whole'>
      <div className='leftSide'>
        <div>
          <Graphs />
        </div>
      </div>
      <div className='rightSide'>
        <Steps />
      </div>
    </div>
  );
};

export default DashBoard;
