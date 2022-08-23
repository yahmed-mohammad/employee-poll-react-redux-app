import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questions";

const NewPoll = ({dispatch, questions}) => {
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");
    const [isValid, setIsValid] = useState(true);
    //const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFirstOptionChange = (e) => {
        const value = e.target.value;
        setFirstOption(value);
    };

    const handleSecondOptionChange = (e) => {
        const value = e.target.value;
        setSecondOption(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!firstOption || !secondOption) {
            setIsValid(false);
            return;
        }
        dispatch(handleAddQuestion(firstOption, secondOption));
        //setIsSubmitted(true);
        navigate("/");
        };

    return (
        <div className="containerNewPoll">
            <h1>Would you Rather</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="firstOption"
                           data-testid="firstOptionLabel"
                           className="">First Option</label>
                    <div className="">
                        <input
                            value={firstOption}
                            onChange={handleFirstOptionChange}
                            type="text"
                            name="firstOption"
                            id="firstOption"
                            data-testid="firstOption"
                            className="inputNewPoll"/>
                    </div>
                </div>

                <div className="mt-3">
                    <label htmlFor="secondOption"
                           data-testid="secondOptionLabel"
                           className="block text-sm font-medium text-slate-700">Second Option</label>
                    <div className="mt-1">
                        <input
                            value={secondOption}
                            onChange={handleSecondOptionChange}
                            type="text"
                            name="secondOption"
                            id="secondOption"
                            data-testid="secondOption"
                            className="inputNewPoll"/>
                    </div>
                </div>
                { !isValid && <div className="error" >Please enter valid values and submit again.</div>}

                <div className="">
                    <button type="submit"
                        data-testid="submit-poll"
                        className="buttonLogin">
                        Submit
                    </button>
                </div>
                {/* { isSubmitted && <div>
                    <br/>
                    Poll was added Successfully<br/>
                    <Link to={'/questions/'+ Object.values(questions)[Object.keys(questions).length-1].id}>
                    Please click to view the added question
                    </Link>
                </div>} */}

            </form>
        </div>
    );
};

const mapStateToProps = ({questions, authedUser}) => ({
    authedUser: authedUser,
    questions: questions
});

export default connect(mapStateToProps)(NewPoll);
