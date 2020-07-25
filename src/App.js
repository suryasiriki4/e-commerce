import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import ItemsInCart from './components/ItemsInCart';
import React, {Component}  from 'react';
import Error from './components/Error';

function App() {
    return(
        <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={ItemsInCart}  />
            <Route component={Error} />
        </Switch>
    </main>
    );
    
}

export default App;