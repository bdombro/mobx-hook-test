import * as React from "react";
import {hot, setConfig} from "react-hot-loader";

import {observer} from "mobx-react";


// HOt reload logging level
// setConfig({logLevel: "error"});

export const Counter = observer(props => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
});

export const HotApp = hot(module)(Counter);