/**
 * Main entry point for webpack. Keep it seperate from App.tsx so hot reload works
 */
import * as React from "react";
import {render} from "react-dom";
import {HotApp} from "./App";
import { setConfig } from "react-hot-loader";

setConfig({ pureSFC: true });

render(<HotApp />, document.getElementById("root"));
