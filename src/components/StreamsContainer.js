import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, setStreams }from '../redux/reducers';
import Streams from './Streams';


const StreamsContainer = (props) => {

    const token = useSelector(state => state.api.token)
    const dispatch = useDispatch();    

    const clientId = '58qdnq5g4b69ahtaqe0lpeeku75r2g';
    const clientSecret = 'h4d7y27vz1xs0894q4ypnjryg39lvk';

    const setStreamsFunc = () => {
                if(!token) {
                    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`)
                    .then(response => response.data.access_token)
                    .then(token => {
                        dispatch(setToken(token))

                        axios.get('https://api.twitch.tv/helix/streams/',
                            {
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                    'Client-Id': clientId
                                }
                            }
                        )
                        .then(response => response.data.data)
                        .then(streams => {
                            dispatch(setStreams(streams))
                        })
                    })
            }
        }

    useEffect(setStreamsFunc,[]);

        return (
            <Streams />
        );
}

// export setStreamsFunc;   
export default StreamsContainer; 