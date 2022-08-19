import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {handleAddQuestion} from "../actions/questions";

const NewPoll = ({dispatch}) => {
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

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
        dispatch(handleAddQuestion(firstOption, secondOption));
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

                <div className="">
                    <button type="submit"
                            data-testid="submit-poll"
                            className="buttonLogin">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default connect()(NewPoll);
