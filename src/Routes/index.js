import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Search from "../components/Search"
import BookDetail from "../components/BookDetail"
import NoMatch from "../components/NoMatch";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={ Search } />
            <Route path="/detail/:id" component={ BookDetail } />
            <Route component={ NoMatch } />
        </Switch>
    </Router>
)