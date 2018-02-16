import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import tweetsReducer from './components/tweetsReducer';
import usersReducer from './components/usersReducer';

const middleware = applyMiddleware(promise(), thunk, logger);
const reducer = combineReducers({
    users: usersReducer,
    tweets: tweetsReducer
})
const store = createStore(reducer, middleware);
export default store