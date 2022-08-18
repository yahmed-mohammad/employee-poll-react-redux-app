import {configureStore} from '@reduxjs/toolkit';
import authedUser from "./reducers/authedUser";
import users from "./reducers/users";
import questions from "./reducers/questions";
import thunk from 'redux-thunk';
import logger from './middleware/logger';

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions,
  },
  middleware: [thunk, logger]
});
