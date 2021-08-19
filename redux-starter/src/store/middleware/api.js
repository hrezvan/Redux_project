import axios from 'axios';
import * as actions from '../api';

const action = {
    type: 'apiCallBegan',
    payload: {
        url: '/bugs',
        method: 'get',
        data: {},
        onSuccess: 'bugsRecieved',
        onError: 'apiRequestFailed'
    }
}

const api = store => next => async action => {
    if (action.type !== 'apiCallBegan') return next(action); 

    const {url, method, data, onSuccess, onError} = action.payload;

    try {
        const response = await axios.request({
            baseURL: 'http://localhost:9001/api',
            url,
            method,
            data
        });

        store.dispatch(actions.apiCallSuccess(response.data));

        if (onSuccess)
            store.dispatch({type: onSuccess, payload: response.data});
    } catch(error) {
        store.dispatch(actions.apiCallFailed(error));

        if (onError)
            store.dispatch({type: onError, payload: error});
    }
    
}

export default api;