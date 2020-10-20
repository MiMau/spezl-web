import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './container/home/Home';
import '../assets/css/Stylesheet.css';
import Burger from "./components/Burger";

const App = () => (
    <>
        <div className="menu">
            <div>
                <span>
                    SPEZL-IT
                </span>
            </div>
            <div className="menu-link-bar">
                <NavLink to="/" className="link-event">Das Unternehmen</NavLink>
                <NavLink to="/" className="link-event">Dienstleistungen</NavLink>
                <NavLink to="/Impressum" className="link-event">Impressum</NavLink>
                <NavLink to="/Kontakt" className="menu-link-button button-event">Kontakt</NavLink>
            </div>
            <Burger></Burger>
        </div>
        <div id="context">
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    </>
);

export default App;
