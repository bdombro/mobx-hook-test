/**
 * Main entry point for webpack. Keep it seperate from App.tsx so hot reload works
 */
import * as React from "react";
import {render} from "react-dom";

const Counter = props => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setCount(count-1)}>-</button>
            <button onClick={() => setCount(count+1)}>+</button>
            <hr />
        </div>
    );
};

render(<Counter />, document.getElementById("root"));
