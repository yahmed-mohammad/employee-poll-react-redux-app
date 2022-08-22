const {_saveQuestionAnswer, _saveQuestion} = require("./_DATA");


describe("_saveQuestion", () => {
    
    it("should respond with formated question for correct parameters", async () => {
        const mockQuestion = {
            author: {
                id:'sarahedo',
            },
            optionOneText: 'Option1',
            optionTwoText: 'Option2'
        };

        const result = await _saveQuestion(mockQuestion);

        expect(result.author).toEqual(mockQuestion.author.id);
        expect(result.optionOne.text).toEqual(mockQuestion.optionOneText);
        expect(result.optionTwo.text).toEqual(mockQuestion.optionTwoText);
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('timestamp');
    });

    it("should return error for wrong parameters", async () => {
        const response = await _saveQuestion({
            optionOneText: "Hello",
            optionTwoText: undefined,
            author: {
                id: "sarahedo"
            }
        }).catch(e => e);

        expect(response).toBe("Please provide optionOneText, optionTwoText, and author");
    });
});

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

