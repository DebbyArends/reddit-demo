import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import './Subreddit.css'
import {ReactComponent as Back} from "../../assets/211686_back_arrow_icon.svg";

function Subreddit() {
    const {subredditId} = useParams()
    const [state, setState] = useState()
    const history = useHistory()
    function handleClick(){
        history.push("/")
    }

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
                    <div>
                        <Header
                        title={state.data.display_name_prefixed}
                        specifications="Subreddit Specifications"/>
                        <section className="subreddit-outercontainer">
                            <article className="Subreddit-innercontainer">
                                <h1>Title</h1>
                                <p>{state.data.title}</p>

                                <h1>Description</h1>
                                <p>{state.data.public_description}</p>

                                <h1>Number of subscribers:</h1>
                                <p>{state.data.subscribers}</p>
                                <span className="backHome">
                                    <figure>
                                        <Back
                                        className="back-icon"/>
                                    </figure>
                                    <button type="button" onClick={handleClick} className="button-back"><strong>Take me back</strong></button>
                                </span>
                            </article>
                        </section>
                    </div>
                </>
            }
        </>
    )
}

export default Subreddit