import {_saveQuestion, _getUsers, _getQuestions} from "../data/_DATA";

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({optionOneText, optionTwoText, author});
}

export function saveAnswer(authedUserId, qid, answer) {
    return _saveQuestion({
        authedUser: authedUserId,
        qid,
        answer
    });
}