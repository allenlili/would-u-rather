import { combineReducers } from 'redux';
import user from './redux/user.redux';
import question from './redux/question.redux';

const reducers = combineReducers({ user, question });

export default reducers;
