import React from 'react';

function CartItem(props) {
  const {id, name, price, quantity} = props
  return (
    <div>
      <li key={id} className='collection-item collections'>
        <p> {name} x{quantity} = {price * quantity}<b>$</b></p>  
        <span className='secondary-content'>
        <i className='material-icons add_icon' onClick={() => props.addGoods(id)}>exposure_plus_1</i>
        <i className='material-icons add_icon minus_icon' onClick={() => props.removeGoods(id)}>exposure_minus_1</i>
          <i className='material-icons delete_icon' onClick={() => props.removeFromBasket(id)}>delete_forever</i>
        </span>
      </li>
    </div>
  );
}

export default CartItem;