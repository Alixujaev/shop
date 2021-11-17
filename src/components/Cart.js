import React from 'react';

function Cart(props) {
  const {quantity = [], handleBasket = Function.prototype} = props
  return (
    <div className='shopping_main' onClick={handleBasket}> 
        <i class="material-icons shopping_icon">add_shopping_cart</i>
        <span>{quantity ? quantity : null}</span>
    </div>
  );
}

export default Cart;