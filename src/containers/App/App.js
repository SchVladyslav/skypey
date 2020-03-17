import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main';
import _ from 'lodash';
//import staticData from "./static-data";

import './App.css';
import store from '../../store';

const App = () => {

  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>   
      <Main user={user} activeUserId={activeUserId} />
    </div>
  ); 
}

export default App;
