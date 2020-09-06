import React from 'react';
import {NavLink} from "react-router-dom";
import Busket from "../Busket/Busket";
import {useSelector} from "react-redux";

const Header = () => {

  const {totalCount, totalPrice} = useSelector(state => state.cart)

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <NavLink to={'/'}>PIZZA TASK</NavLink>
        </div>
        <div className="header-busket">
          <NavLink className="header-busket-link" to={'/cart'}>
            <span className='header-busket-count'>{totalCount > 0 && <span>{totalCount}</span>}</span>
            <span className='header-busket-title'>
              {totalCount ? `${totalPrice}$` : 'Корзина'}
            </span>
          </NavLink>
          {totalCount > 0 &&  <Busket/>}
        </div>
      </div>

    </header>
  )
}

export default Header