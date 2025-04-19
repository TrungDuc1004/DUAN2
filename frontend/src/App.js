import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import Navbar from './components/pages/Navbar';
import Home from './components/Home';
import Bestsellerproduct from './components/Bestsellerproduct';
import Footer from './components/pages/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ToastList from './components/ToastList';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import Order from './components/Order';
import AllOrders from './components/admin/AllOrders';
import AllProducts from './components/admin/AllProducts';
import UpdateProduct from './components/UpdateProduct';
import AllAccounts from './components/admin/AllAccounts';
import CreateAccount from './components/CreateAccount';
import UpdateAccount from './components/UpdateAccount';
import ManagerSystem from './components/admin/ManagerSystem';
import './css/App.css'
import './css/Toast.css'

function App() {

    return (
        <BrowserRouter>
            <div>
                <div id="toast">
                    <ToastList />
                </div>

                <div>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home />
                                <Bestsellerproduct />
                            </>
                        } />
                        <Route path="/shop" element={<ProductList />} />
                        <Route path="/product/:slug" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/order" element={<Order />} />

                        <Route path="/manager/admin" element={<ManagerSystem />} />

                        <Route path="/create" element={<CreateProduct />} />
                        <Route path="/update/:id/edit" element={<UpdateProduct />} />

                        <Route path="/create-account" element={<CreateAccount />} />
                        <Route path="/update/:id/edit-account" element={<UpdateAccount />} />
                    </Routes>

                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;
