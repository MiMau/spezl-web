import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import '../assets/css/Stylesheet.css';
import Home from './container/home/Home';
import Menu from "./container/menu";

const App = () => (
    <>
        <Menu>
            <NavLink to="/" className="link-event">Das Unternehmen</NavLink>
            <NavLink to="/" className="link-event">Dienstleistungen</NavLink>
            <NavLink to="/Impressum" className="link-event">Impressum</NavLink>
            <NavLink to="/Kontakt" className="menu-link-button button-event">Kontakt</NavLink>
        </Menu>
        <div id="context">
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    </>
);

export default App;
