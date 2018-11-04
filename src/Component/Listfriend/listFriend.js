import React, {Component} from 'react';
import './listFriend.css';
import Friend from './friend';
import {connect} from 'react-redux';

class ListFriends extends Component {

    getAllFriends() {
        console.log(this.props.listFriend)
        return this.props.listFriend.map(f=>{
            return <Friend name={f.name} photoURL={f.photoUrl}/>
        })
    }

    render(){
        return(
            <div className='list-friend-container'>
                <div className='title-frame'>
                    DANH SÁCH CHAT
                </div>
                <div className='list-friend-frame'>
                    {this.getAllFriends()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listFriend: state.listFriend
    }
}

export default connect(mapStateToProps)(ListFriends)