import React, { useState } from "react";

const StepHeader = () => {
  const [show, setShow] = useState(false);

  const onButtonClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        style={{
          marginTop: 6,
          marginBottom: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h5>Steps to do for today:</h5>
        <button onClick={onButtonClick}>
          <i class='fas fa-plus'></i>
        </button>
      </div>
      {show && (
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
          <div
            style={{
              marginLeft: 5,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h6>Add new step</h6>
            <input defaultValue={"New Step"}></input>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button
              style={{ marginLeft: 5, marginBottom: 5 }}
              onClick={() => {
                setShow(false);
              }}
            >
              Add
            </button>
            <button
              style={{ marginLeft: 5, marginBottom: 5 }}
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StepHeader;
