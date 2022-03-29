import React, {useEffect, useState} from "react";
import axios from "axios";

function Home() {
const [posts, setPosts] = useState([])

    useEffect( () => {
        async function fetchReddit() {
            try{
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15')
                console.log(result.data.data.children)
                setPosts(result.data.data.children)
            }
            catch (e) {
                console.error(e)
            }
        }
        fetchReddit(posts);
    }, [])


    return (
        <>
            <h1>Home</h1>
            {posts && posts.map((post) => {
                return (
                    <ul>
                        <li key={post.data.id}>
                        {post.data.title}
                        </li>
                    </ul>)
            })}
        </>
    )
}

export default Home