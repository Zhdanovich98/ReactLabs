//actioncreators
export const AddUserActionCreator = () => ({ type: ADD_USER });
export const RemoveUserActionCreator = id => ({ type: DEL_USER, id: id });
export const updaeInfoActionCreator = (text, text1, text2) => ({
    type: UPDATE_INFO,
    NewText: fnameinput,
    NewText1: lnameinput,
    NewText2: emailinput
});

//actiontypes
export const ADD_USER = "ADD-USER";
export const REMOVE_USER = "DEL-USER";
export const UPDATE_NEW_USER_TEXT = "UPDATE_INFO";