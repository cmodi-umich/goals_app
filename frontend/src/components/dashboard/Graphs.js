import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Select from "react-select";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const makeLabel = {
  score: "Total Score",
  chem: "Chemical and Physical Foundations of Biological Systems Score",
  reasoning: "Critical Analysis and Reasoning Skills Score",
  bio: "Biological and Biochemical Foundations of Living Systems Score",
  psych: "Psychological, Social, and Biological Foundations of Behavior Score",
};

const makeDataAndOptions = (graphData, filter) => {
  var x = [];
  var y = [];
  graphData.forEach((element) => {
    x.push(element[filter]);
    y.push(element.date);
  });

  var label = makeLabel[filter];

  var data = {
    labels: y,
    datasets: [
      {
        label: label,
        data: x,
        backgroundColor: "blue",
        borderColor: "lightblue",
        fill: false,
        lineTension: 0,
        radius: 5,
      },
    ],
  };

  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: `MCAT ${label} Progress`,
      fontSize: 18,
      fontColor: "#111",
    },
    legend: {
      display: false,
    },
  };
  return [data, options];
};

const Graphs = () => {
  const [graphData, setGraphData] = useState([
    {
      score: 407,
      chem: 100,
      reasoning: 100,
      bio: 100,
      psych: 100,
      date: "06/08/2020",
    },
    {
      score: 417,
      chem: 130,
      reasoning: 123,
      bio: 87,
      psych: 132,
      date: "06/14/2020",
    },
    {
      score: 397,
      chem: 92,
      reasoning: 122,
      bio: 87,
      psych: 120,
      date: "06/18/2020",
    },
    {
      score: 460,
      chem: 125,
      reasoning: 156,
      bio: 178,
      psych: 123,
      date: "07/20/2020",
    },
    {
      score: 507,
      chem: 112,
      reasoning: 123,
      bio: 111,
      psych: 98,
      date: "07/28/2020",
    },
  ]);
  const [data, setData] = useState();
  const [options, setOptions] = useState();
  const [filter, setFilter] = useState("score");
  const [selectedOption, setSelectedOption] = useState("Total Score");
  const [reload, setReload] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const selectOptions = [
    { value: "score", label: "Total Score" },
    {
      value: "chem",
      label: "Chemical and Physical Foundations of Biological Systems Score",
    },
    {
      value: "reasoning",
      label: "Critical Analysis and Reasoning Skills Score",
    },
    {
      value: "bio",
      label: "Biological and Biochemical Foundations of Living Systems Score",
    },
    {
      value: "psych",
      label:
        "Psychological, Social, and Biological Foundations of Behavior Score",
    },
  ];

  useEffect(() => {
    const [data, options] = makeDataAndOptions(graphData, filter);
    setData(data);
    setOptions(options);
  }, [reload]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setFilter(selectedOption.value);
    setReload(!reload);
  };

  return (
    <React.Fragment>
      <Line data={data} options={options} width={900} height={500} />
      <div
        style={{
          width: "60%",
          marginBottom: 10,
          marginTop: 10,
          marginLeft: "20%",
        }}
      >
        <Select
          placeholder={"Total Score"}
          value={selectedOption}
          onChange={handleChange}
          options={selectOptions}
        />
      </div>
      <Button onClick={toggle}>Add New Score</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <input></input>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            Add Score
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Graphs;
