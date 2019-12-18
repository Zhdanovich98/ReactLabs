import { connect } from "react-redux";
import User from "./User";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {

    }
}


const UserContainer =  connect(mapStateToProps, mapDispatchToProps)(User);
export default UserContainer;