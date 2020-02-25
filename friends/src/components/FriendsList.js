import React from 'react';
// import Loader from 'react-loader-spinner';
// import moment from 'moment';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
              this.setState({
              friendsList: res.data.data
          })  
        })
          .catch(err => console.log(err)); 
    };

    render(){
        return (
            <div>

            </div>
        );
    }
}

export default FriendsList;