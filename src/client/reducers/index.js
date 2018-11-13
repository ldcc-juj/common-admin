import authentication from './authentication';
import bot from './bot';

import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    bot
});