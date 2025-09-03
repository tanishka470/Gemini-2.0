import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

const Sidebar=()=>{
    const [extended,setextended]=useState(false)
    return (
        <div className="Sidebar">
            <div className="top">
                <img onClick={()=>setextended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="Menu" />
                <div className="new-chat">
                    <img className='plus' src={assets.plus_icon} alt="Plus" />
                    {extended ? <p>New chat</p> : null}
                </div>
                

            </div>
            {extended ?<div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>what is react ...</p>

                </div>

            </div> : null} 
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help" />
                    {extended && <span>Help</span>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity" />
                    {extended && <span>Activity</span>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings" />
                    {extended && <span>Settings</span>}
                </div>

            </div>



        </div>
    )
}
export default Sidebar;