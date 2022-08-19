import React, {useEffect} from 'react';
import './App.css';
import Nav from "./components/Nav";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import {connect} from "react-redux";
import Login from "./components/Login";
import {handleInitialData} from "./actions/shared";
import Leaderboard from "./components/Leaderboard";
import Error404 from "./components/404";
import CheckRoute from "./components/CheckRoute";

function App({dispatch, loggedIn}) {
    useEffect(() => {
        dispatch(handleInitialData());
    });

    return (
        <div className="container mx-auto py-4">
            {loggedIn && <Nav/>}
            <Routes>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/" element={<CheckRoute><Dashboard/></CheckRoute>}/>
                <Route path="/leaderboard" exact element={<CheckRoute><Leaderboard/></CheckRoute>}/>
                <Route path="/questions/:id" element={<CheckRoute><PollPage/></CheckRoute>}/>
                <Route path="/add" exact element={<CheckRoute><NewPoll/></CheckRoute>}/>
                <Route path="/404" exact element={<Error404/>}/>
                <Route path="*" exact element={<Navigate to={"/404"}/>}/>
            </Routes>
        </div>
    );
}

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
