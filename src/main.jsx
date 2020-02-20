import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Form from "./view/root/Form";
import App from "./view/store/App";


export function Main() {
    return(
        <HashRouter>
            <div>
                <ul>
                    <li><NavLink exact to="/">f</NavLink></li>
                    <li><NavLink to="/summary-form">s</NavLink></li>
                </ul>
                <div>
                    <Route exact path="/" component={Form} />
                    <Route path="/summary-form" component={App} />
                </div>
            </div>
        </HashRouter>
    )
}

export default Main;