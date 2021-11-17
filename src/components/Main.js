import React, {useState, useEffect} from 'react';
import {apiKey, apiUrl} from '../config'
import Cart from './Cart';
import CartItem from './CartItem';
import CartList from './CartList';
import GoodList from './GoodList.js';
import Loader from './Loader'

function Main() {
  const [goods, setGoods] = useState([])
  const [laoding, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isShowBasket, setShowBasket] = useState(false)

  const handleBasket = () => {
    setShowBasket(!isShowBasket)
  }
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(item => item.id !== itemId)
    setOrder(newOrder)
  }
  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    if(itemIndex < 0){
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    }else{
      const newOrder = order.map((orderItem, index) => {
        if(itemIndex === index){
          return{
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        }else{
          return orderItem
        }
      })
      setOrder(newOrder)
    }
  }

  const addGoods = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId){
        const newQuantity = el.quantity + 1
        return{
          ...el,
          quantity: newQuantity
        }
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }
    const removeGoods = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId){
        const newQuantity = el.quantity - 1
        return{
          ...el,
          quantity: newQuantity
        }
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }

  
  useEffect(()=>{
    fetch(apiUrl, {
      headers: {
        'Authorization': apiKey,
      },
    })
    .then(response => response.json())
    .then((data) => {
      data.featured && setGoods(data.featured);
      setLoading(false)
    })
  }, [])

  
  return (
    <div className='content container'>
      <Cart quantity={order.length} handleBasket={handleBasket}/>
      {laoding ? <Loader/> : <GoodList goods={goods} addToBasket={addToBasket}/>}
      {isShowBasket ?  <CartList order={order} handleBasket={handleBasket} removeFromBasket={removeFromBasket} addGoods={addGoods} removeGoods={removeGoods}/> : ''}
     
    </div>
  );
}

export default Main;