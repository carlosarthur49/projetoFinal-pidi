import React from 'react';
import {Header} from './components/Header';
import { HomeBoard } from './pages/HomeBoard';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';

export function App() {
  return (
   
   <Router>
      <div className="App">

        <Header />
        <GlobalStyle />
        
        <Switch>
          <Route path="/" exact component={HomeBoard}/>
          <Route path="/products" component={ProductsPage}/>
        </Switch>

      </div>
   </Router>
  
  );
}


//<Header />
//<HomeBoard />
//<GlobalStyle />