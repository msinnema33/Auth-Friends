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

    addFriends = e => {
        e.preventDefault();
        // Make a POST request and send the credentials object to the api
        axiosWithAuth()
          .post('/api/login', this.state.newFriend)
          .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            // navigate the user to /protected (whatever landing page)
            // this.props.history.push('/protected');
          })
          .catch(err => console.log(err));
      };


    render() {
     return ( 
      <div>
        <form onSubmit={this.addFriends}>
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

export default AddFriends;