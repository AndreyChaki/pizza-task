import React from "react";
import {Field, Form} from "react-final-form";
import {Input} from "../common/FormsControls/FormsControls";
import {useDispatch} from "react-redux";
import {addNewOrder} from "../../redux/orders-reducer";


const CartForm = ({items, totalPrice, deliveryPrice}) => {

  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    const orderObj = {
      orderItems: {...items},
      totalPrice,
      formData
    }
    dispatch(addNewOrder(orderObj))
  }


  const required = value => (value ? undefined : 'Обязательное поле')
  const mustBeNumber = value => (isNaN(value) ? 'Должно быть число' : undefined)

  const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

  return (
    <div className='cart-form'>
      <Form onSubmit={onSubmit} initialValues={{deliveryType: '1', payType: '1'}}>
        {({handleSubmit, values}) => (
          <form onSubmit={handleSubmit}>

            <h3>Способ доставки<span className='required'>*</span></h3>
            <div className='cart-form-check'>
              <div>
                <label>
                  <Field name='deliveryType' component='input' type='radio' value='1' validate={required}/>{' '}
                  Доставка
                  <div className='cart-form-info'>Стоимость доставки {deliveryPrice}$</div>
                </label>
              </div>
              <div>
                <label>
                  <Field name='deliveryType' component='input' type='radio' value='0' validate={required}/>{' '}
                  Самовывоз
                </label>
              </div>
            </div>
            {values.deliveryType === '1'
              ? <div>
                <h3>Адрес доставки</h3>
                <div className='col3'>
                  <div>
                    <label>Улица<span className='required'>*</span></label>
                    <Field name={'address.street'} component={Input} validate={required}/>
                  </div>
                  <div>
                    <label>Дом<span className='required'>*</span></label>
                    <Field name={'address.house'} component={Input} validate={required}/>
                  </div>
                  <div className='col2'>
                    <div>
                      <label>Квартира<span className='required'>*</span></label>
                      <Field name={'address.flat'} component={Input}
                             validate={composeValidators(required, mustBeNumber)}/>
                    </div>
                    <div>
                      <label>Этаж</label>
                      <Field name={'address.floor'} component={Input}/>
                    </div>
                  </div>
                </div>
              </div>
              : <div>
                <h3>Адрес самовывоза</h3>
                г. Екатеринбург, ул. Малышева, 145
              </div>
            }


            <h3>Способ оплаты<span className='required'>*</span></h3>
            <div className='cart-form-check'>
              <div>
                <label>
                  <Field name='payType' component='input' type='radio' value='1' validate={required}/>{' '}
                  Безналичный расчет онлайн
                </label>
              </div>
              <div>
                <label>
                  <Field name='payType' component='input' type='radio' value='0' validate={required}/>{' '}
                  Наличный расчет
                </label>
              </div>
            </div>

            <h3>Получатель</h3>
            <div className='col3'>
              <div>
                <label>Имя<span className='required'>*</span></label>
                <Field name={'name'} component={Input} validate={required}/>
              </div>
              <div>
                <label>Телефон<span className='required'>*</span></label>
                <Field name={'phone'} component={Input} validate={composeValidators(required, mustBeNumber)}/>
              </div>
              <div>
                <label>Email</label>
                <Field name={'email'} component={Input}/>
              </div>
            </div>

            <div className="cart-form-total">
              <div>
                <div>
                  Сумма заказа
                </div>
                {values.deliveryType === '1' && <span>(с учетом доставки)</span>}
              </div>
              <div>
                <b>{values.deliveryType === '1' ? totalPrice + deliveryPrice : totalPrice}$</b>
              </div>
            </div>

            <div className="cart-form-buttons">
              <button className='button'>Заказать</button>
            </div>
          </form>
        )}
      </Form>
    </div>
  )
}

export default CartForm