import {connect} from "react-redux";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {handleAddAnswer} from "../actions/questions";

const PollPage = ({dispatch, authedUser, question, author}) => {
    const navigate = useNavigate();

    if (!authedUser || !question || !author) {
        return <Navigate to="/404"/>;
    }

    const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };

    return (
        <div className="containerPoll">
            <h4>Poll by {author.id}</h4>

            <div>
                <img src={author.avatarURL} alt="Profile" className="pollImage"/>
            </div>

            <div>
                <h2>Would you rather?</h2>
            </div>

            <div>

                <button onClick={handleOptionOne} disabled={hasVoted}
                        className={"buttonPoll " + (hasVotedForOptionOne ? "buttonPollVoted" : "")}>
                    <div className={hasVotedForOptionOne ? "chosen" : ""}>
                        <p>{question.optionOne.text}</p>
                        {!hasVoted &&
                        <p>Click to vote</p>
                        }
                    </div>
                </button>

                <button onClick={handleOptionTwo} disabled={hasVoted}
                        className={"buttonPoll " + (hasVotedForOptionTwo ? "buttonPollVoted" : "")}>
                    <p>{question.optionTwo.text}</p>
                    {!hasVoted &&
                    <p>Click to vote</p>
                    }
                </button>


            </div>


        </div>
    );
};

const mapStateToProps = ({authedUser, users, questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        return <Navigate to="/404"/>;
        // throw new Error(`Question or user is not found.\n ${e}`);
    }
};

export default connect(mapStateToProps)(PollPage);
