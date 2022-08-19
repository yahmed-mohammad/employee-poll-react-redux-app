const {_saveQuestionAnswer, _saveQuestion} = require("./_DATA");
describe("_saveQuestionAnswer", () => {
    it("should return true for correct parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        });

        expect(response).toBeTruthy();
    });

    it("should return error for wrong parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: undefined,
            answer: "optionOne"
        }).catch(e => e);

        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});

describe("_saveQuestion", () => {
    /** 
    it("should return respond with formated question for correct parameters", async () => {
        const question = {
            optionOneText: "Learn in Classroom",
            optionTwoText: "Learn Online",
            author: "sarahedo"
        };
        const response = await _saveQuestion(question);
        
        expect(response.id).toBeTruthy();
        expect(response.author).toBe(question.author.id);
        expect(response.optionOne.text).toBe(question.optionOneText);
        expect(response.optionTwo.text).toBe(question.optionTwoText);
    });
    */

    it("should return error for wrong parameters", async () => {
        const response = await _saveQuestion({
            optionOneText: "Hello",
            optionTwoText: undefined,
            author: "sarahedo"
        }).catch(e => e);

        expect(response).toBe("Please provide optionOneText, optionTwoText, and author");
    });
});
