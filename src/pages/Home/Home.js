import './Home.css'
import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import logoReddit from "../../assets/logo-reddit.png"


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
            <Header
            src={logoReddit}
            title="Reddit"/>
            <h2><strong>Hottest posts</strong></h2>
            <p className="sub-text"><strong>on Reddit right now</strong></p>
            <article className="posts-inner-container">
                {posts && posts.map((post) => {
                    return (
                        <div className="posts-container" key={post.data.id}>
                            <ul className="posts1">
                                <li>
                                    <h4 ><a href={post.data.url} target="blank" className="titel-reddit">{post.data.title}</a></h4>
                                </li>
                                <li className="link-comments">
                                        <Link to={`subreddit/${post.data.subreddit}`}><p className="link-subreddit">{post.data.subreddit_name_prefixed}</p></Link>
                                        <p>Comments {post.data.num_comments} - Ups {post.data.ups}</p>
                                </li>
                            </ul>
                        </div>)
                })}
            </article>
        </div>
    )
}

export default Home

