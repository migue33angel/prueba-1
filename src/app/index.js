console.log("asdasd");
import '@babel/polyfill';/* PARA QUE SOPORTE LA ACINCRONISIDAD EN EL EPDDO DE LINKS   */ 
import React from "react";
import ReactDOM from "react-dom";
import data from './data.json';
import App from './App';
console.log(data);
const heading = ['31', '123', '123'];


ReactDOM.render(<App data={data} title='Openlibrary API' headings={heading} />
    , document.getElementById("app"));

