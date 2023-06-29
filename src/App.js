import "./App.css";
import React, {Suspense} from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
const DialogsContainer=React.lazy(()=>import("./components/Dialogs/DialogsContainer"));
const ProfileContainer=React.lazy(()=>import("./components/Profile/ProfileContainer"));
class App extends React.Component{
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
        <BrowserRouter>
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Suspense fallback={<Preloader/>}>
                <Routes>
                  <Route path="/dialogs" element={<DialogsContainer/>}></Route>
                  <Route path="/profile/:userId?" element={<ProfileContainer/>}></Route>
                  <Route path="/users" element={<UsersContainer />}></Route>
                  <Route path="/login" element={<LoginPage />}></Route>
                </Routes>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

/*const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />}></Route>
            <Route path="/profile/:userId?" element={<ProfileContainer />}></Route>
            <Route path="/users" element={<UsersContainer />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};*/

let mapStateToProps=(state)=>({
  initialized:state.app.initialized
})

export default connect(mapStateToProps,{initializeApp})(App);
