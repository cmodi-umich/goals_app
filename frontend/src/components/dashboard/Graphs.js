import React, { useState, useEffect } from 'react';

const Graphs = () => {
    const [graphs, setGraphs] = useState([{event: "Hello", due_date: "1/2/2000", goal_id: "1383259-90"},
                                        {event: "Hello1", due_date: "1/2/2000", goal_id: "1383259-91"},
                                        {event: "Hello2", due_date: "1/2/2000", goal_id: "1383259-92"},
                                        {event: "Hello3", due_date: "1/2/2000", goal_id: "1383259-93"}])

    /*useEffect(() => {
        
    }, [graphs])*/

    const Checkbox = (props) => {
        return(
            <input type="checkbox" {...props} />
        );
    }

    const ListItem = (props) => {
        const [checked, setChecked] = useState(false)
        const handleCheckboxChange = event => setChecked(!checked)

        return(
            <div>
                <label>
                    <Checkbox checked={checked} onChange={handleCheckboxChange}/>
                    <span>{props.graph.event}</span>
                </label>
                <p>{props.graph.due_date}</p>
            </div>
        );
    }

    const listItems = graphs.map((graph) => 
        <ListItem graph={graph} />
    );

    return(
        <div>
            <div>
                {listItems}
            </div>
        </div>
    );
}

export default Graphs;