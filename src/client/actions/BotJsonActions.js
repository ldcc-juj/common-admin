import axios from 'axios';
import {responseAction} from '../utils/common';

import {
    JSON_GET,
    JSON_GET_SUCCESS,
    JSON_GET_FAILURE
} from './ActionTypes';

export function getJsonRequest(BotId){
    return async (dispatch) => {
        dispatch(getJson()); // getBots API start

        return await axios.post('/bots/getJson', {BotId})
        .then(res => responseAction(dispatch, res.data.code, res.data.data, getJsonSuccess, res.data.data.data, getJsonFailure))
        .catch(e => dispatch(getJsonFailure()));
    };
}

export function getJson(){
    return {
        type: JSON_GET
    };
}

export function getJsonSuccess(testJson){
    return {
        type: JSON_GET_SUCCESS,
        testJson
    };
}

export function getJsonFailure () {
    return {
        type: JSON_GET_FAILURE
    };
}