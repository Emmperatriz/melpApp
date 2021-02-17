import logo from './logo.svg';
import './App.css';
import Restaurants from './components/restaurants';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/footer.js';

function App() {


  return (
    <div>
      <div className="App">


      </div>


      <Restaurants />
      
      <Footer />

    </div>
  );
}

export default App;
