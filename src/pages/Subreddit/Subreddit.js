import React from "react";
import {useParams} from "react-router-dom";

function Subreddit() {
    const {subredditId} = useParams()
    return (
        <>
            <h1>{subredditId}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur doloremque eligendi hic
                molestiae odio officiis repellendus unde veniam vero!</p>
        </>
    )
}

export default Subreddit