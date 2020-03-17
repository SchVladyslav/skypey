import React from 'react';
import store from '../../store';
import { setTypingValue, sendMessage } from '../../action';
import './MessageInput.css';

const MessageInput = ({values}) => {
    const state = store.getState();
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    }

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input 
                className="Message__input"
                onChange={handleChange}
                value={values}
                placeholder="Write a message"
            />
        </form>
    )
}

export default MessageInput;