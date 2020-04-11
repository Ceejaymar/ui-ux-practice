import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Services from './components/Services';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Services />
      <Product />
    </div>
  );
}

export default App;
