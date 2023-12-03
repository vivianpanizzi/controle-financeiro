import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Menu from "./components/Menu";
import Principal from "./pages/principal";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Sobre from "./pages/sobre";

const Routes = () => (
    <BrowserRouter>
        <Menu></Menu>
        <Switch>
            <Route exact path="/" component={Principal}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/sobre" component={Sobre}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;