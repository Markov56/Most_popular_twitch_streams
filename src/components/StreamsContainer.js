import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTokenAndStreamsThunk } from '../redux/reducers';
import Streams from './Streams';


const StreamsContainer = (props) => {
    const dispatch = useDispatch();    
    const clientId = '58qdnq5g4b69ahtaqe0lpeeku75r2g';
    const clientSecret = 'h4d7y27vz1xs0894q4ypnjryg39lvk';

    const setStreamsFunc = () => {
        dispatch(getTokenAndStreamsThunk(clientId, clientSecret))
        }

    useEffect(setStreamsFunc, []);

        return (
            <Streams />
        );
}
  
export default StreamsContainer; 