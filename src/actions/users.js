export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const GET_QUESTION_ID = "GET_QUESTION_ID";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
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

export function getQuestionId(authedUser) {
    return {
        type: GET_QUESTION_ID,
        authedUser
    }
}
