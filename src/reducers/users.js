import { RECEIVE_ALL_USERS } from "../action/users";

export default function users(state={}, action) {
    switch(action.type) {
        case RECEIVE_ALL_USERS:
            return{
                ...state,
                ...action.users
            }
        default:
            return state;
    }
}