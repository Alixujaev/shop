import React from 'react';
import CartItem from './CartItem';

function CartList(props) {
  const {order} = props
  const totalPrice = order.length ? order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0): 0
  return (
    <div className='basket'>
      <ul className='collection basket_list'>
        <li className='collection-item active'>
          Basket
        </li>
      {order.length ? order.map((item) => {
        return(
          <CartItem key={item.id} {...item} removeGoods={props.removeGoods} addGoods={props.addGoods} removeFromBasket={props.removeFromBasket}/>

        )
      }): <li className='collection-item'>Basket is empty</li>}
        <li className='collection-item active'>
          Total price: {totalPrice} <b>$</b>
        </li>
        <i class='material-icons close_icon' onClick={props.handleBasket}>close</i>
      </ul>

    </div>
  );
}

export default CartList;