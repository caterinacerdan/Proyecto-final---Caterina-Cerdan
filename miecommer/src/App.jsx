import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import NavBar from './components/NavBar';
import ProductsContainer from './components/ProductsContainer';
import ContactContainer from './components/ContactContainer';
import ProductDetail from './components/ProductDetail';

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<HomeContainer/>}/>
          <Route exact path="/products" element={<ProductsContainer/>}/>
          <Route exact path="/contact" element={<ContactContainer/>}/>
          <Route exact path="/product/:id" element={<ProductDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
