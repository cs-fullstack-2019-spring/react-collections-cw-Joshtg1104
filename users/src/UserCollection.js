import React, { Component } from 'react';
import Users from './Users';

class UserCollection extends Component{
    render(){
        //maps information from rawData.js, which is being called in App.js and passing it through Users component
        const userList = this.props.userData.map(
            (eachUser)=>{
                return(<Users key={eachUser.id} user={eachUser}/>)
            }
        );
        return(
           <div>
               {userList}
           </div>
        );
    }
}
//exports UserCollection component to App.js
export default UserCollection;