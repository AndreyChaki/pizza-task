import React from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {Route, Switch} from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="app-root">
      <Header/>
      <div className='content'>
        <Switch>
          <Route exact path='/' render={() => <Home/>}/>
          <Route exact path='/cart' render={() => <Cart/>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
