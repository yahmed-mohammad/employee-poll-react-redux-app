export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export function receiveUsers(users) {
    return {
        type: RECEIVE_ALL_USERS,
        users
    };
}