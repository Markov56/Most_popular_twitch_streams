import * as axios from 'axios';


export const getToken = (clientId, clientSecret) => {
    return( 
        axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`)

        )
}

export const getStreams = (token, clientId) => {    
    return (
        axios.get('https://api.twitch.tv/helix/streams/',
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Client-Id': clientId
                    }
                }
        )
       
    )
}

