import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {handleLogout} from "../actions/authedUser";

const Nav = ({dispatch, authedUserId}) => {

    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    };

    return (
        <nav className="navbar">
            <Link to="/"
                  className="nav">Home</Link>
            <Link to="/leaderboard"
                  className="nav">Leaderboard</Link>
            <Link to="/add"
                  className="nav">New
                Poll</Link>
            <span
                className="navText"
                data-testid="user-information">User: {authedUserId}</span>
            <button onClick={logout}
                    className="navButton">Logout
            </button>
        </nav>
    );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});


export default connect(mapStateToProps)(Nav);
