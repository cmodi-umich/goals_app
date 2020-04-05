import React from 'react';
import { Container } from 'reactstrap';
import './dashboard/DashBoard.css'
import Quote from './dashboard/Quote';
import StatusUpdate from './dashboard/StatusUpdate';
import Graphs from './dashboard/Graphs';
import Steps from './dashboard/Steps.js';

const DashBoard = (props) => {

    return (
        <div className="whole" >
            <div className="leftSide">
                <div className="left">
                    <Quote />
                    <StatusUpdate />
                </div>
                <div className="right">
                    <Graphs />
                </div>
            </div>
            <div className="rightSide">
                <Steps />
            </div>
        </div> 
    );
}


export default DashBoard;