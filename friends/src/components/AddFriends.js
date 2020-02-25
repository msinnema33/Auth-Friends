import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class AddFriends extends React.Component {
    state = {
      newFriend: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.newFriend,
          [e.target.name]: e.target.value
        }
      });
    };




    render() {
     return ( 
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.newFriend.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.newFriend.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.newFriend.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.newFriend.password}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
     ); 
    } 

}      