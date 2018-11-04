import {GET_LIST_FRIENDS}from "../Actions/define"
import firebase from 'firebase'

const initialState = [];

export const listFriend = (state = initialState, action) =>{
    switch(action.type){
        case GET_LIST_FRIENDS:{
                return action.listFriend.filter(f => {
                    console.log("aa");
                    return f.id !== firebase.auth().currentUser.uid;
                });
            }
        default: return state;
    }
}