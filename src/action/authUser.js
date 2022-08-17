export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOGOUT_AUTH_USER = "LOGOUT_AUTH_USER";

export function setAuthUser(authUser) {
    return {
        type: SET_AUTH_USER,
        authUser
    };
}

export function logoutAuthUser() {
    return {
        type: LOGOUT_AUTH_USER,
    };
}