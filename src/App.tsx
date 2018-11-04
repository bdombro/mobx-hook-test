import * as React from "react";
import {hot, setConfig} from "react-hot-loader";

import {observer} from "mobx-react";


// HOt reload logging level
// setConfig({logLevel: "error"});
setConfig({ pureSFC: true });

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

export const HotApp = hot(module)(Counter);