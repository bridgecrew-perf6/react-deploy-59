import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as R} from "react-router-dom";


ReactDOM.render(


   // React.createElement("h1", null, "hello world"),

   <R>
       <App /> 
   </R>,
    
    document.getElementById('root')

);