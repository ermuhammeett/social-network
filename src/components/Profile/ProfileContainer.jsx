import React, {useEffect} from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {withRedirectAuth} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId=props.authorizedUserId;
    }

    useEffect(() => {
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [userId]);
    return (
        <div>
            <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId:state.auth.userId,
    isAuth:state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRedirectAuth)
(ProfileContainer);


