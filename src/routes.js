import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import List  from "./Pages/ListUser/index"
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/list" component={List}></Route>
            </Switch>
        </BrowserRouter>
    )
}