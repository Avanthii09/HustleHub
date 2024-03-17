import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import App from "./App";


// ReactDOM.render(<HashRouter>
//         <App/>
// </HashRouter>, document.getElementById("root"));

ReactDOM.render(
    <Provider store={store} ><App/></Provider>, document.getElementById("root"));