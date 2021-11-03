import React from 'react';
import {Header} from './components/Header';
import { HomeBoard } from './pages/HomeBoard';
import { GlobalStyle } from './styles/global';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import NewProductPage from './pages/NewProductPage';
import LoginPage from './pages/LoginPage';
import PromotionsPage from './pages/PromotionsPage';
import OrderPage from './pages/OrderPage';
import ReportPage from './pages/ReportPage';
import CreateAccountPage from './pages/CreateAccountPage';
import SalesPage from './pages/SalesPage';
import Footer from './components/Footer';

export function App() {
  return (
   
   <Router>
      <div className="App">

        <Header />

        <Switch>
          <Route path="/" exact component={HomeBoard}/>
          <Route path="/products" exact component={ProductsPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/promotions" component={PromotionsPage}/>
          <Route path="/order" component={OrderPage}/>
          <Route path="/report" component={ReportPage}/>
          <Route path="/sign-in" component={CreateAccountPage}/>
          <Route path="/sales" component={SalesPage}/>
          <Route path="/products/newproduct" component={NewProductPage}/>
        </Switch>

        <Footer/>
        <GlobalStyle />
      </div>
   </Router>
  
  );
}


//<Header />
//<HomeBoard />
//<GlobalStyle />