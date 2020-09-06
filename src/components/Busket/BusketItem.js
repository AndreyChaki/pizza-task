import React from 'react';
import {useDispatch} from "react-redux";
import {delItemFromCart, itemCountDecrease, itemCountIncrease} from "../../redux/cart-reducer";

const BusketItem = ({image, title, price, count, size, id}) => {

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
    <div className="busket-block-item">
      <div onClick={onDelFromCart} className="busket-block-item-delete"/>
      <div className="busket-block-item-img">
        <img src={image} alt=""/>
      </div>
      <div className="busket-block-item-info">
        <div className="busket-block-item-title">
          {title}
        </div>
        <div className="busket-block-item-param">
          {size && `Размер ${size} см.`}
        </div>
      </div>
      <div className="busket-block-item-price">
        {price}$
      </div>
      <div className="busket-block-item-count">
        <div className='count-item'>
          <div className='count-item-value'>{count}</div>
          <div onClick={onDecreaseCount} className={count > 1 ? 'count-item-minus' : 'count-item-minus disabled'}/>
          <div onClick={onIncreaseCount} className='count-item-plus'/>
        </div>
      </div>
    </div>
  )
}

export default BusketItem