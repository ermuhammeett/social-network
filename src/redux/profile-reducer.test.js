import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('new post should be added',()=>{
    ///1 test data
    let action=addPostActionCreator('arigato');
    let state = {
        posts: [
            { id: 1, message: "Hi how are you?", likesCount: 12 },
            { id: 2, message: "My first post", likesCount: 11 },
        ],
    };
    ///2 action
    let newState=profileReducer(state,action);
    ///3 expectation
    expect(newState.posts.length).toBe(3);
})
