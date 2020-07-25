import React from 'react';
import {cartItems} from './cart';
import Card from './card';



function ItemsInCart() {
    
    return (
        <div>
            <h2>This is cart</h2>
            <em>{cartItems.length}</em>
            {
                cartItems.map(item => (
                     <Card num={item} />
                )
                   
                )
            }
        </div>
    );
}

export default ItemsInCart;