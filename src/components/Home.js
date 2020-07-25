import React, {Component} from 'react';
import Card from './card';
import Cart from './cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Home() {

    return (
        
        <div>
            <Cart />
            <div className="flex-container">
                <div className="row">
                    <div className="col"><Card num="1" /></div>
                    <div className="col"><Card num="2" /></div>
                    <div className="col"><Card num="3" /></div>
                    <div className="col"><Card num="4" /></div>
                    <div className="col"><Card num="5" /></div>
                    <div className="col"><Card num="6" /></div>
                    <div className="col"><Card num="7" /></div>
                    <div className="col"><Card num="8" /></div>
                </div>
            </div>
        </div>
        
        
    );
}

export default Home;