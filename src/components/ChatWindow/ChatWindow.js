import React from 'react'
import _ from 'lodash';
import './ChatWindow.css'
import store from '../../store/index';
import Header from './Header/Header';
import Chats from './Chats/Chats';
import MessageInput from '../../containers/MessageInput/MessageInput';


const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const {typing} = state;
    const activeUser = state.contacts[activeUserId];
    const activeMsg = state.messages[activeUserId];

    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsg)} />
            <MessageInput values={typing} />
            {/* Conversation for user id: {activeUserId} */}
        </div>
    )
}

export default ChatWindow;