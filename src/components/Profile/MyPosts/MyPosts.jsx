import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10=maxLengthCreator(10)
const AddNewPostForm=(props)=>{
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} name={"newPostText"} validate={[required,maxLength10]} placeholder={"Post message"} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>;
}
const AddNewPostFormRedux=reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {
  console.log("Render");
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
