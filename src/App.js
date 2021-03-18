import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './components/login';
import signup from './components/signup';

function App() {
  return (
    <Router>
        <Switch>
          <Route path = "/" exact component = {login} />
          <Route path = "/signup" component = {signup} />
        </Switch>
    </Router> 
  );
}

export default App;