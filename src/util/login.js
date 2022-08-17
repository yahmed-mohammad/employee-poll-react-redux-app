import { setAuthUser, logoutAuthUser} from "../action/authUser";

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const {users} = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!!user) {
            return dispatch(setAuthUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(logoutAuthUser());
    };
}