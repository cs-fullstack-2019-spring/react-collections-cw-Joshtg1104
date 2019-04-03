import React, { Component } from 'react';
import UserAddress from './UserAddress';

class Users extends Component{
    render(){
        //renders user information onto the html
        return(
            <div>
                <p>Id: {this.props.user.id}</p>
                <p>name: {this.props.user.name}</p>
                <p>username: {this.props.user.username}</p>
                <p>email: {this.props.user.email}</p>
                <div>
                    <UserAddress address={this.props.user.address} />
                </div>
                <p>phone: {this.props.user.phone}</p>
                <p>website: {this.props.user.website}</p>
                <div>company:
                    <p>name: {this.props.user.company.name}</p>
                    <p>catch phrase: {this.props.user.company.catchPhrase}</p>
                    <p>bs: {this.props.user.company.bs}</p>
                </div>
                <hr/>
            </div>
        );
    }
}
//exports Users component, in this case, to UserCollection component
export default Users;