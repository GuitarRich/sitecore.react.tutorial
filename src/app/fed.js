global.jQuery = require('jquery');
require('bootstrap');
require('jquery-ui');

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Switch, Route, Link } from "react-router-dom";

import MainLayout from "./views/layout/MainLayout";
import Home from "./pages/home";

const App = () => (
    <MainLayout>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </MainLayout>
);

ReactDOM.render(
    <BrowserRouter >
        <App />
    </BrowserRouter >,
document.getElementById('app'));