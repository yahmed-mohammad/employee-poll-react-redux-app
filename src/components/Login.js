import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login = ({dispatch, loggedIn}) => {
    const [username, setUsername] = useState("zoshikanlu");
    const [password, setPassword] = useState("pass246");

    if (loggedIn) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirectTo');
        return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
    }

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    return (
        <div className="containerLogin">
            <div className="brand-logo"></div>
            <h1 className="brand-title" data-testid="login-heading">Employee Poll</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="labelLogin">Username</label>
                    <div>
                        <input
                            value={username}
                            onChange={handleUsername}
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className="inputLogin inputs"/>
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="password" className="labelLogin">Password</label>
                    <div>
                        <input
                            value={password}
                            onChange={handlePassword}
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className="inputLogin inputs"/>
                    </div>
                </div>
                <div>
                    <button type="submit"
                            data-testid="submit"
                            className="buttonLogin">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
