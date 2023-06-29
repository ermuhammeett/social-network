import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogElements = state.dialogs.map((d) => (
    <DialogItems name={d.name} id={d.id} />
  ));
  let messagesElement = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};

export default Dialogs;
