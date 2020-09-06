import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import BusketItem from "./BusketItem";

const Busket = () => {

  const {items, totalPrice} = useSelector(state => state.cart)

  return (
    <div className="busket-block">
      <div className="busket-block-title">
        Ваш заказ
      </div>
      <div className="busket-block-list">
        {items && items.map(item => <BusketItem key={`${item.id}_${item.size}`} {...item}/>)}
      </div>
      <div className="busket-block-bottom">
        <div className="busket-block-total-price">
          Итого: <span>{totalPrice}$</span>
        </div>
        <div className="busket-block-button">
          <NavLink className='button' to={'/cart'}>Оформить</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Busket