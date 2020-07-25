import React from 'react';
import Card from './components/card';
import Cart from './components/cart';


function App() {
    return (
        <div>
            <Cart />
            <div className="container">
                <div className="row">
                    <Card className="col-4" num="1"/>
                    <Card className="col-4" num="2"/>
                    <Card className="col-4" num="3"/>
                    <Card className="col-4" num="4"/>
                    <div className="width-100" ></div>
                    <Card className="col-4" num="5"/>
                    <Card className="col-4" num="6"/>
                    <Card className="col-4" num="7"/>
                    <Card className="col-4" num="8"/>
                </div>
            </div>
        </div>
        
        
    );
}

export default App;