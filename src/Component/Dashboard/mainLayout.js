import * as React from 'react';
import ListFriend from "../Listfriend/listFriend"
import Message from "../Message/message"
import firebase from "firebase"
import { showUser } from '../../Actions/callFirebase';
class MainLayout extends React.Component {
    componentDidMount() {
        const currentUser=firebase.auth().currentUser;
        console.log(currentUser)
        showUser(currentUser.uid, currentUser.displayName, currentUser.email, currentUser.photoURL)
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-4 "style={{background: "#eee"}}>
                    <div style={{width: "100%" }}>
                        <label>DANH SÁCH CHAT</label>
                    </div>
                    <div style={{width: "100%"}}>
                        <input placeholder="Nhập tên" style={{width:"70%"}}></input>
                    </div>
                    <div style={{marginTop  :50}}>
                        <ListFriend/>
                    </div>
                </div>
                <div className="col-8" style={{ background: "#ddd" }}>
                    <Message/>
                    <input style={{width:"100%"}} placeholder="Nhập tin nhắn"></input>
                </div>
            </div>
        )
    }
}

export default MainLayout