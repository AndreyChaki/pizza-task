

const ADD_POST = 'catalog/ADD_POST'

let initialState = {
  items: [
    {
      id: 0,
      title: 'Маргарита',
      image: 'https://home-pizza.com/media/_versions_/pizza_05.2016/pizza_margarita_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
    {
      id: 1,
      title: 'Карбонара',
      image: 'https://home-pizza.com/media/_versions_/pizza_05.2016/pizza_karbonara_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
    {
      id: 2,
      title: 'Четыре сыра',
      image: 'https://home-pizza.com/media/_versions_/pizza_05.2016/4_%D1%81%D1%8B%D1%80%D0%B0_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
    {
      id: 3,
      title: 'Грибная',
      image: 'https://home-pizza.com/media/_versions_/pizza_05.2016/pizza_gribnaya_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
    {
      id: 4,
      title: 'Баварская',
      image: 'https://home-pizza.com/media/_versions_/_mg_72622_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
    {
      id: 5,
      title: 'Американо',
      image: 'https://home-pizza.com/media/_versions_/dsc05665_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
    {
      id: 6,
      title: 'Микеланджело',
      image: 'https://home-pizza.com/media/_versions_/capture00308-2_(cut)_(2)_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
    {
      id: 7,
      title: 'Гавайская',
      image: 'https://home-pizza.com/media/_versions_/pizza_05.2016/pizza_hawaii_catalog_product_list.jpg',
      sizes: [26, 30, 40],
      priceD: 10,
      priceE: 10,
    },
  ]
}

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: state.posts.length + 1, postText: action.body}]
      }
    default:
      return state
  }
}

export default catalogReducer