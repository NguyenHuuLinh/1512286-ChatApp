import firebase from 'firebase'
import {getListFriend} from '../Actions'


export const showUser = (uid, name, email, avatar) =>{
    const dataUser= firebase.database().ref('/User' ).once('value').then(snapshot =>{
        const user = snapshot.val();
        console.log(snapshot.val())
        const findFriend = user.filter( f =>{
            return f.id === uid ? {
                ...f
            }: null
        })
        console.log(findFriend)
        if(findFriend.length === 0){
            firebase.database().ref('User').set([
                ...user,
                {
                    id: uid,
                    email: email,
                    avatar: avatar,
                    name: name
                }
            ])
        }
      });
}

export function getAllFriends(_this) {
    firebase.database().ref('/User').once('value').then(snapshot=>{
        console.log(snapshot.val())
        _this.props.dispatch(getListFriend(snapshot.val()));
    })
}