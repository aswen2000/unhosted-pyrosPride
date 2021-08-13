import React from 'react';
import './App.css';
import { Header, Footer, Product } from './components/index';
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { BrowserRouter, Route, Redirect, Switch, Link, useHistory } from "react-router-dom";
import {Home, About, Contact, Locations, Products, ThunderWear} from "./pages/index";

function App() {
    const history = useHistory();

    return (
        <div className="App">
            <Header/>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/locations' component={Locations} />
                <Route path='/products' component={Products} />
                <Route path='/thunderwear' component={ThunderWear} />
            </Switch>

            <Footer/>
        </div>
    );
}

export default App;
