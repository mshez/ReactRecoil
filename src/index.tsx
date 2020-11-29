import * as React from "react";
import {
  RecoilRoot,
} from 'recoil';
import { render } from "react-dom";
import 'antd/dist/antd.css';


import App from "./App";

const rootElement = document.getElementById("root");
render(<RecoilRoot><App /></RecoilRoot>, rootElement);
