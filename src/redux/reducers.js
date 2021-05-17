import { getStreams, getToken } from '../api/api'

export const SET_TOKEN = 'SET_TOKEN';
export const SET_STREAMS = 'SET_STREAMS';

const initialState = {
    token: '',
    streams: []
};

export const apiReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOKEN: 
          return {
              ...state,
              token: action.token
          }
        case SET_STREAMS: 

          return {
              ...state,
              streams: action.streams
          }

          default: 
            return state;
    }
}

export const setToken = (token) => ({
    type: SET_TOKEN,
    token
})

export const setStreams = (streams) => ({
    type: SET_STREAMS,
    streams
})

export const setStreamsThunk = (token, clientId) =>  (dispatch) => {
    getStreams(token, clientId)
        .then(response => response.data.data)
        .then(streams => {
            dispatch(setStreams(streams))
        })                             
    
};

export const getTokenAndStreamsThunk = (clientId, clientSecret) => (dispatch) => {
    getToken(clientId, clientSecret)
    .then(response => response.data.access_token)
    .then(token => {
        dispatch(setToken(token))

        getStreams(token, clientId)
        .then(response =>response.data.data)
        .then(streams => {
            dispatch(setStreams(streams))
        })
    })
}