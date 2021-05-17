import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  setStreamsThunk } from '../redux/reducers';


 const Header = (props) => {
    const token = useSelector(state => state.api.token)
    const dispatch = useDispatch();    

    const clientId = '58qdnq5g4b69ahtaqe0lpeeku75r2g';

    const setStreamsFunc = () => {
        dispatch(setStreamsThunk(token, clientId))
                                
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