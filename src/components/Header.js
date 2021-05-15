import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {  setStreams } from '../redux/reducers';


 const Header = (props) => {
    const token = useSelector(state => state.api.token)
    const dispatch = useDispatch();    

    const clientId = '58qdnq5g4b69ahtaqe0lpeeku75r2g';
    const clientSecret = 'h4d7y27vz1xs0894q4ypnjryg39lvk';

    const setStreamsFunc = () => {

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
                   
            
        }
    return(
        <header className='header'>
            <h1>Most popular streamers on twitch</h1>
            <button className='refresh-button' 
            onClick={setStreamsFunc}

            >Refresh</button>
        </header>
    )
}


export default Header;