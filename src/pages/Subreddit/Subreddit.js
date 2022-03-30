import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    const {subredditId} = useParams()
    const [state, setState] = useState()

    useEffect( () => {
        async function fetchReddit() {
            try{
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`)
                console.log(result.data)
                setState(result.data)
            }
            catch (e) {
                console.error(e)
            }
        }
        fetchReddit();
    }, [])
    return (
        <>
            {state &&
                <>
                    <h1>Title</h1>
                    <p>{state.data.title}</p>

                    <h1>Description</h1>
                    <p>{state.data.public_description}</p>

                    <h1>Number of subscribers:</h1>
                    <p>{state.data.subscribers}</p>
                </>
            }
        </>
    )
}

export default Subreddit