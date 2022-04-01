import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './pages/Login';
import wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route exact path='/carteira' component={ wallet } />
    </Switch>
  )
}

export default App;
