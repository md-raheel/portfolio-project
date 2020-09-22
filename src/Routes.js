import React from 'react';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Clocky from './Components/Screenshots/Clocky';
import UMS from './Components/Screenshots/UMS';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/screenshots/clocky" component={Clocky} />
            <Route exact path="/screenshots/ums" component={UMS} />
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes
