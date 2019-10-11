import React from 'react';

import './App.css';

// NavBar Componnet
import Navbar from './Components/Navbar/Navbar';
// Background-Video Component
import Background from './Components/Background/Background';
// Header Component
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Background />
      <div className='overlay'>
        <div className='content'>
          <Navbar />
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
