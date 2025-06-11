import React from 'react';

import './App.css';
import Home from './screens/Home';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from './screens/Login';
import Signup from './screens/Signup';
// eslint-disable-next-line
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';

function App() {
  return (
    <CartProvider>

    <Router>
    <>
    <Routes>
    
    <Route exact path='/' element={<Home />}  />
    <Route exact path='/login' element={<Login />}  />
    <Route exact path='/signup' element={<Signup />}  />
    <Route exact path='/myorder' element={<MyOrder />} />

    </Routes>
    </>
    </Router>
    </CartProvider>
  );
}

export default App;

