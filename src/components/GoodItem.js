import React from 'react';

function GoodItem(props) {
  const {id, name, description, price, full_background, addToBasket} = props
  return (
    <div key={id} className='card'>
      <div className="card_image">
        <img src={full_background} alt={name} className='imagee'/>
        <span className='card_title'>{name}</span>
      </div>
      <div className="card_content">
        <p>{description}</p>
      </div>
      <div className="card_action">
        <button className='button' onClick={() => addToBasket({id, name, price})}>Buy</button>
        <span className='card_price'>{price}$</span>
      </div>
    </div>
  );
}

export default GoodItem