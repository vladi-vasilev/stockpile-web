import React from 'react';
import './App.css';
import HouseAdd from './components/houseAdd/HouseAdd';
import HouseList from './components/houseList/HouseList';
import StorageList from './components/storageList/StorageList';

const App = () => {
  return (
    <div className="App">
      <HouseAdd />
      <HouseList />
      <StorageList />
    </div>
  );
}

export default App;
