import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,useParams} from 'react-router-dom';
import {AppProvider} from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Stylist from './pages/Stylist';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import './styles.css';

function CategoryRoute(){
  const {category} = useParams();
  const value = decodeURIComponent(category || '');
  return <Shop category={value} />;
}

function App(){
  return <AppProvider><Layout><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/category/:category" element={<CategoryRoute/>}/>
    <Route path="/indian" element={<Shop category="Indian"/>}/>
    <Route path="/indo-western" element={<Shop category="Indo-Western"/>}/>
    <Route path="/western" element={<Shop category="Western"/>}/>
    <Route path="/accessories" element={<Shop category="Accessories"/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/stylist" element={<Stylist/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></Layout></AppProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
