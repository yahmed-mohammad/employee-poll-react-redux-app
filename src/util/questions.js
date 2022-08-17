import { saveQuestion, saveAnswer } from "./api";
import { addQuestion, addAnswer } from "../action/questions";
import { addQuestionUser, addAnswerUser } from "../action/users";

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion(firstOption, secondOption, authedUser)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser(question))
            })
    };
}

export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return saveAnswer(authedUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswer(authedUser.id, questionId, answer));
                dispatch(addAnswerUser(authedUser.id, questionId, answer));
            });
    };
}