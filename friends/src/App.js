import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';



import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <Link to='/FriendsList'>Friends List</Link>
          </li>
          <li>
          <Link to='/AddFriends'>Add Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path='/FriendsList' component={FriendsList}/>
          <PrivateRoute path='/AddFriends' component={AddFriends}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
