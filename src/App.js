import React from 'react';
import HouseAdd from './components/houseAdd/HouseAdd';
import HouseList from './components/houseList/HouseList';
import StorageList from './components/storageList/StorageList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemList from './components/itemList/ItemList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HouseAdd />
            <HouseList />
          </Route>
          <Route path="/:houseId">
            <StorageList />
            <ItemList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
