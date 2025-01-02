import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import Offer from './Components/Offers/Offers';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Footer />
      <Blog />
      
    </>
  );
}

export default App;
