import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css'



const Streams = (props) => {
    const streams = useSelector(state => state.api.streams)
    if(!streams) {
       return  <div>Wait for..</div>
    } else { 
        return (            
            <div className='streams-list'>
                {streams.map(stream => (
                    <div className='stream-container'>
                    
                        <img src={
                            stream.thumbnail_url
                            .replace('{width}', '300')
                            .replace('{height}', '200')} alt=""/>
                            
                            <p><span>Game:</span> {stream.game_name}</p>
                            <p><span>Streamer: </span>{stream.user_name}</p>
                            <p className='viewers'>{stream.viewer_count}<span> viewers</span></p>
                            <a className='twitch-link' href={`https://www.twitch.tv/${stream.user_login}`}>Watch on twitch</a>
                    </div>
                ))}
             </div> 
        )
    }
    }


export default Streams; 