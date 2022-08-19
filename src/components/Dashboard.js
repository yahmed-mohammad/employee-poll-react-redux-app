import {connect} from "react-redux";
import Card from "./Card";

const Dashboard = ({authedUser, questions, users}) => {

    const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));

    const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id));

    return (
        <div>
            <h1 data-testid="heading">Dashboard</h1>

            <h4>* New Questions are highlighted in green</h4>
            <ul className="horiOne">
                {questions
                    .filter(unanswered)
                    .map((question) => (
                        <li key={question.id} className="first">
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
            </ul>
            <ul className="horiTwo">
                {questions
                    .filter(answered)
                    .map((question) => (
                        <li key={question.id} className="second">
                            <Card question={question} author={users[question.author]}/>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
