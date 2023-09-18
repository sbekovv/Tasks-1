import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from "styled-components";
import {ExpenceContextPorvider} from "./store";
import App from "./App";


const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ExpenceContextPorvider>
         <Global/>
         <App/>
     </ExpenceContextPorvider>
  </React.StrictMode>
);
