import React from "react";
import store from "./redux/redux-store";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "./redux/dialogs-reducer";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
