import React from 'react';
import GoodItem from './GoodItem';

function GoodList({goods = [],addToBasket}) {
  if(!goods.length){
    return <h3>Nothing found!</h3>
  }
  return(
    <div className="goods" id='#goods'>
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket}/>
      ))}
    </div>
  )
}

export default GoodList