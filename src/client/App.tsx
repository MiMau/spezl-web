import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import '../assets/css/Stylesheet.css';
import Home from './container/home/Home';
import Menu from "./container/menu";
import Web from "./container/web";
import Impressum from "./container/impressum";
import Kontakt from "./container/kontakt";

const App = () => {

    return (
        <>
            <Menu>
                <Link to="/" className="link-event">Das Unternehmen</Link>
                <Link to="/" className="link-event">Dienstleistungen</Link>
                <Link to="/impressum" className="link-event">Impressum</Link>
            </Menu>
            <div id="context">
                <Switch >
                    <Route exact path="/" component={Home}/>
                    <Route path="/web" component={Web}/>
                    <Route path="/impressum" component={Impressum}/>
                </Switch>
            </div>
        </>
    );
}

export default App;
