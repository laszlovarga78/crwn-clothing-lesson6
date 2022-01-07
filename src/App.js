import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  // a dispatch miatt már nem kell a konstruktor:
  /*
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }*/

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      /*this.setState({ currentUser: user });
      console.log(user);
      
      createUserProfileDocument(user);
      */
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
         //console.log(snapShot.data());
         //console.log(snapShot);

         setCurrentUser({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         }/*, () => {
          console.log(this.state);
         }*/);

         console.log(this.state);
       });
       
     } else {
       setCurrentUser(userAuth);
     }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SingInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

// https://react-redux.js.org/using-react-redux/connect-mapdispatch

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
    // setCurrentUser: user => dispatch({ type: 'SET_CURRENT_USER'})
  }
}

export default connect(null, mapDispatchToProps)(App);