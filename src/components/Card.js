import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Card = ({question, author}) => {
    return (
        <Link to={'questions/' + question.id}>
        <div className="card">
            <div>
                <img className="avator" src={author?.avatarURL} alt="Author" />
            </div>
            <div className="cardContainer">
                <div>{question.author}</div>
                <p>{new Date(question.timestamp).toDateString()}</p>
                <p>Show</p>
            </div>
        </div>
        </Link>
    );
}

export default connect()(Card);