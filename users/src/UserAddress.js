import React, {Component} from "react";
import Users from "./Users";

class UserAddress extends Component{
    render(){
        return(
            //an href leading back to the same page
            <a href={'Users'}>address:
                {/*all the areas under the address section of the user information*/}
                <p>street: {this.props.address.street}</p>
                <p>suite: {this.props.address.suite}</p>
                <p>city: {this.props.address.city}</p>
                <p>zipcode: {this.props.address.zipcode}</p>
                <div>geo:
                    <p>lat:{this.props.address.geo.lat}</p>
                    <p>lng:{this.props.address.geo.lng}</p>
                </div>
            </a>
        );
    }
}

export default UserAddress;