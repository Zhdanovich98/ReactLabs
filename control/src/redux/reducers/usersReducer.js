export const AddUserActionCreator = () => ({ type: ADD_USER });
export const RemoveUserActionCreator = id => ({ type: REMOVE_USER, id: id });


let initialState = {usersData: [{id:1,firstname:"Korney",lastname:"Novikov",email:"kn@gmail.com"},
                                 {id:2,firstname:"Alyosha",lastname: "Rus",email:"AleshaRus123@gmail.com"},
                                {id:3,firstname: "Dmitiy",lastname:"Antonov",email:"JohnSilver@gmail.com"} ],
                                fnameinput:"", lnameinput:"",emailinput:""};


var usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:      
      return {
        ...state,
        usersData:[
          ...state.usersData,
          {id: state.usersData.length++,firstname : state.fnameinput,lastname:state.lnameinput,email:state.emailinput}
        ]
      }  
      case DEL_USER:
        return{
          ...state,
          usersData: [...state.usersData].filter(el => el.id !== action.id)
      }
      case UPDATE_INFO:
        return {
          ...state,
          newText: action.fnameinput,
          newText1: action.lnameinput,
          newText2: action.emailinput
        };
    default:
      return state;
  }
}


export default usersReducer;