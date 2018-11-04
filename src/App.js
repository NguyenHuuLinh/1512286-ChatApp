import React, { Component } from 'react';
import './App.css';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Login from "./Component/Login/login"
import MainLayout from "./Component/Dashboard/mainLayout"
import {showUser} from "./Actions/callFirebase"
// link deploy firebase: https://chatapp-firebase-51026.firebaseapp.com/
firebase.initializeApp({
  apiKey: "AIzaSyAe2dlKUPHdQcbecaCUaeZUPgQtp1gsNSI",
  authDomain: "chatapp-firebase-51026.firebaseapp.com",
  databaseURL: "https://chatapp-firebase-51026.firebaseio.com/"
})

// var database = firebase.database();

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
    // showUser(123,"adsada","dasdas","Asdafd")
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            {/* <div>Đăng nhập!</div>
            <button onClick={() => firebase.auth().signOut()}>Đăng xuất!</button>
            <h1>Xin chào! {firebase.auth().currentUser.displayName}</h1>
            <img alt="avt" src={firebase.auth().currentUser.photoURL}></img> */}
            <MainLayout/>
          </span>
        )
          : (
            <div>
              <Login />
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
