import React from 'react';
import ReactDOM from 'react-dom/client';
import SignIn from "./components/SIgnIn/signIn";
import {createGlobalStyle} from "styled-components";


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
      <Global/>
    <SignIn />
  </React.StrictMode>
);
