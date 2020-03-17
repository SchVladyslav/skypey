import React from 'react'
import './Empty.css';

const Empty = ({user}) => {
    const {name, status, profile_pic} = user;
    const firstName = name.split(' ')[0];
    return (
        <div className="Empty"> 
            <h1 className="Empty__name">Welcome, {firstName}</h1>
            <img className="Empty__img" src={profile_pic} alt={name}/>
            <p className="Empty__status">
                <b>Status:</b> {status}                
            </p>
            <button className="Empty__btn">Start a conversation</button>
            <p className="Empty__info">Search for someone to start chating with or go to Contacts to se who is available</p>
        </div>
    )
}

export default Empty;