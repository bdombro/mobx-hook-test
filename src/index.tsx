/**
 * Main entry point for webpack. Keep it seperate from App.tsx so hot reload works
 */
import * as React from "react";
import {render} from "react-dom";
import {observer, useObservable} from "mobx-react";

const Counter = observer(props => {
    const counter = useObservable({
        count: 0
    });
    return (
        <div>
            {counter.count}
            <button onClick={() => counter.count--}>-</button>
            <button onClick={() => counter.count++}>+</button>
            <hr />
        </div>
    );
});

render(<Counter />, document.getElementById("root"));
