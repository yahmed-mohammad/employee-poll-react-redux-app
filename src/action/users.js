export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

export function receiveUsers(users) {
    return {
        type: RECEIVE_ALL_USERS,
        users
    };
}

export function addAnswerUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer,
    };
}

export function addQuestionUser({author, id}) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid: id,
    };
}