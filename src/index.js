import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './models/Home'
import About from './models/About'
import Resume from './models/Resume';
import "./style.css";
import Contact from './models/Contact';



const routing = (
        <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
        </BrowserRouter>
)


ReactDOM.render(
        routing,
        document.getElementById('root')
);