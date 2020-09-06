import React from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {NavLink} from "react-router-dom";
import CartForm from "./CartForm";
import {setOrderComplete} from "../../redux/orders-reducer";
import {compose} from "redux";

class Cart extends React.Component {

  componentWillUnmount() {
    this.props.setOrderComplete(false)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    if (this.props.orderComplete) {
      return (
        <div>
          <h1>Спасибо за заказ</h1>
          <div className='order-complete-text'>
            Ваш заказ <b>#{this.props.orders.length}</b>
          </div>
          <NavLink className='button' to={'/'}>Вернуться в каталог</NavLink>
        </div>
      )
    }

    if (!this.props.totalCount) {
      return (
        <div>
          <h1>Корзина пуста</h1>
          <NavLink className='button' to={'/'}>Вернуться в каталог</NavLink>
        </div>
      )
    }

    return (
      <div>
        <h1>Корзина</h1>
        <div className='cart-list'>
          {this.props.items && this.props.items.map(item => <CartItem key={`${item.id}_${item.size}`} {...item}/>)}
        </div>
        <div className="cart-total">
          <div className='cart-total-price'>
            Итого: <b>{this.props.totalPrice}$</b>
          </div>
        </div>

        <CartForm items={this.props.items} totalPrice={this.props.totalPrice} deliveryPrice={this.props.deliveryPrice}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    totalPrice: state.cart.totalPrice,
    totalCount: state.cart.totalCount,
    orderComplete: state.orders.orderComplete,
    orders: state.orders.orders,
    deliveryPrice: state.cart.deliveryPrice,
  }
}

const mapDispatchToProps = {
  setOrderComplete
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Cart)
