import React from 'react';
import {useDispatch} from "react-redux";
import {delItemFromCart, itemCountDecrease, itemCountIncrease} from "../../redux/cart-reducer";

const CartItem = ({id, image, title, size, count, price}) => {

  const dispatch = useDispatch()

  const onDelFromCart = () => {
    dispatch(delItemFromCart(id, size))
  }

  const onDecreaseCount = () => {
    dispatch(itemCountDecrease(id, size))
  }

  const onIncreaseCount = () => {
    dispatch(itemCountIncrease(id, size))
  }

  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={image} alt=""/>
      </div>
      <div className='cart-item-info'>
        <div className='cart-item-title'>
          {title}
        </div>
        <div className='cart-item-param'>
          {size && `Размер ${size} см.`}
        </div>
      </div>
      <div className='cart-item-price'>
        {price}$
      </div>
      <div className='cart-item-count'>
        <div className='count-item'>
          <div className='count-item-value'>{count}</div>
          <div onClick={onDecreaseCount} className={count > 1 ? 'count-item-minus' : 'count-item-minus disabled'}/>
          <div onClick={onIncreaseCount} className='count-item-plus'/>
        </div>
      </div>
      <div className='cart-item-price'>
        {price * count}$
      </div>
      <div>
        <div onClick={onDelFromCart} className='cart-item-del'/>
      </div>

    </div>
  )
}

export default CartItem