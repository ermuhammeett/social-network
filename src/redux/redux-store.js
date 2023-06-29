import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth:authReducer,
  app:appReducer,
  form:formReducer,
});

const store=legacy_createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
//let store = legacy_createStore(reducers,applyMiddleware(thunk));

//window.store = store;
export default store;
