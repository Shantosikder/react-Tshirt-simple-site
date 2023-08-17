import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length ===0){
        message =<p>Please add some products</p>
    }else{
   message = <div>
    <p>Borolokxxx</p>
    <span>Thanks for giving money</span>
   </div> 
    }
    return (
        <div>
            <h2>Order Summary: {cart.length} </h2>
            {cart.length > 2 ? <span>Aro Kino</span> : <span className='fokir-customar'>Fokir ato kom kinos keno</span>}
            {message}
            {
                cart.map(tshirt => <p
                key={tshirt._id}>
                {tshirt.name} <button
                onClick={()=>handleRemoveFromCart(tshirt._id)}
                >X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;