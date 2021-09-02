import React from 'react';
import { Banner } from './components/banner/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <div>
          <p>some other comp</p>
        </div>
      </header>
    </div>
  );
}

export default App;
