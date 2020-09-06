import React, {useEffect} from 'react';
import {connect, useSelector} from "react-redux";
import {requestCatalogItems} from "../../redux/catalog-reducer";
import CatalogItem from "../CatalogItem/CatalogItem";

function Home({requestCatalogItems}) {

  const {items, isFetching} = useSelector(state => state.catalog)

  useEffect(() => {
    requestCatalogItems()
  }, [requestCatalogItems])

  return (
    <div>
      <h1>Пицца</h1>
      {isFetching
        ? 'Загрузка...'
        : <div className="catalog-list">
          {items && items.map(item => <CatalogItem key={item.id} {...item}/>)}
        </div>
      }
    </div>
  )
}

export default connect(null, {requestCatalogItems})(Home)