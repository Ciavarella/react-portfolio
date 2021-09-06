import React from 'react';
import Banner from './components/banner/Banner';
import Assignments from './components/assignments/Assignments';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <Assignments />
    </div>
  );
}

export default App;
