import './Home.css'
import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Home() {
const [posts, setPosts] = useState(null)

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
        <div className="posts-outer-container">
            <article className="posts-inner-container">
                <h2><strong>Hottest posts</strong></h2>
                <p className="sub-text"><strong>on Reddit right now</strong></p>
                {posts && posts.map((post) => {
                    return (
                        <div className="posts-container" key={post.data.id}>
                            <ul className="posts1">
                                <li>
                                    <h4>{post.data.title}</h4>
                                    <div>
                                        <Link to={`subreddit/${post.data.subreddit}`}>{post.data.subreddit_name_prefixed}</Link>
                                        <p>Comments {post.data.num_comments} - Ups {post.data.ups}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>)
                })}
            </article>
        </div>
    )
}

export default Home