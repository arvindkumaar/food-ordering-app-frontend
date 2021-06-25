import React, {Component} from 'react';
import Home from './home/Home';
import Details from './details/Details';
import Checkout from './checkout/Checkout';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Controller extends Component {
    constructor() {
        super();
        this.baseUrl = "";
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path = "/" render = {(props) => <Home {...props} baseUrl = {this.baseUrl} />} />
                    <Route exact path = "/details" render = {(props) => <Details {...props} baseUrl = {this.baseUrl} />} />
                    <Route exact path = "/checkout" render = {(props) => <Checkout {...props} baseUrl = {this.baseUrl} />} />
                </div>

            </Router>
        );
    }
}

export default Controller;