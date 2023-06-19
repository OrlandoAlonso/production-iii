import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";

//import pages
import Home from "./pages/Home.jsx";
import Buy from "./pages/Buy.jsx";
import Category from "./pages/Category.jsx";
import Client from "./pages/Client.jsx";
import ModelP from "./pages/ModelP.jsx";
import ModelQ from "./pages/ModelQ.jsx";
import Product from "./pages/Product.jsx";
import Provider from "./pages/Provider.jsx";
import Sale from "./pages/Sale.jsx";
import Stock from "./pages/Stock.jsx";
import NewClient from './pages/News/NewClient.jsx';
import NewProvider from './pages/News/NewProvider.jsx';
import NewProduct from './pages/News/NewProduct.jsx';
import NewCategory from './pages/News/NewCategory.jsx';
import NewBuy from './pages/News/NewBuy.jsx';
import NewSale from './pages/News/NewSale.jsx';

//import components
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <div className='overflow-hidden'>
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/clients' element={<Client />} />
            <Route path='/clients/new' element={<NewClient />} />
            <Route path='/providers' element={<Provider />} />
            <Route path='/providers/new' element={<NewProvider />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/new' element={<NewProduct />} />
            <Route path='/categories' element={<Category />} />
            <Route path='/categories/new' element={<NewCategory />} />
            <Route path='/buys' element={<Buy />} />
            <Route path='/buys/new' element={<NewBuy />} />
            <Route path='/sales' element={<Sale />} />
            <Route path='/sales/new' element={<NewSale />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/modelP' element={<ModelP />} />
            <Route path='/modelQ' element={<ModelQ />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;