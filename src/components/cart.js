import React, {useState} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

var increase;

var cartItems = [];

function Cart(props) {

    const [count, setCount] = useState(0);
    const [cartArr, setCart] = useState([]);

    increase = function addToCart(num) {        
        setCart(prev =>
            [...prev, num]
        );
        cartItems = cartArr;
        console.log(cartItems);

        setCount(count+1);   
        
    }

    
    

    return (
        <div className="cart-div">
            <ShoppingCartIcon className="cart-icon"/>
            <h2>{count}</h2>
        </div>
    );

}

// console.log(cartArr);


export default Cart;
export {increase as AddToCart, cartItems};
