import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../redux/cart-reducer";

function CatalogItem({image, id, sizes, title, prices}) {

  const onSelectSize = (prop, index) => {
    setSelectSize(prop)
    setPrice(prices[index])
  }

  let [selectSize, setSelectSize] = useState(sizes[0])
  let [price, setPrice] = useState(prices[0])

  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addItemToCart({id, title, price, image, size: selectSize}))
  }

  return (
    <div className='catalog-item'>
      <div className='catalog-item-img'>
        <img src={image} alt=""/>
      </div>
      <div className="catalog-item-content">
        <div className='catalog-item-title'>
          {title}
        </div>
        {sizes && <div className='catalog-item-params'>
          {sizes.map((size, index) => {
              return (
                <div className={selectSize === size ? 'selected' : ''}
                     onClick={() => onSelectSize(size, index)} key={size}>
                  <span>{size} см.</span>
                </div>
              )
            }
          )}
        </div>
        }
        <div className='catalog-item-bottom'>
          <div className='catalog-item-price'>
            {price}$
          </div>
          <div className='catalog-item-button'>
            <button className='button' onClick={onAddToCart}>В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogItem