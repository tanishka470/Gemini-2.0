import React from "react";
import './Main.css';
import { assets } from '../../assets/assets';
import {Context} from '../../context/context';

const Main=()=>{
    const{onSent,recentPrompts,showResult,loading,resultData,input,setInput}=useContext(Context);
    return(
        <div className="Main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello tanishka.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>suggest beautiful places to see on an upcoming trip</p>
                        <img src={assets.compass_icon} alt="Compass" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this content: urban planning</p>
                        <img src={assets.bulb_icon} alt="Bulb" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="Message" />
                    </div>
                    <div className="card">
                        <p>imporve the readability of the following code</p>
                        <img src={assets.code_icon} alt="Code" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter the prompt here!" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>Gemini may display inaccurate info,including about people,so double-click its responses.your privacy and Gemini Apps are important.</p>
                    </div>

                </div>

            </div>

            </div>
    )
}
export default Main;