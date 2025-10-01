import React from 'react';
import './App.css';
import Header from './Header';
import Highlights from './Highlights';
import LatestEvent from './LatestEvent';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />
      <hr />
      <Highlights />
      <LatestEvent />
      <Footer />
    </div>
  );
}