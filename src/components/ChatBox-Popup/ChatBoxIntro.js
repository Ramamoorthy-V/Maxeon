import React from 'react'
import { IoMdSend } from 'react-icons/io'


function ChatBoxIntro({handleConversation}) {
  return (
    <div className='start-convo-section'>
            <span className='chat-header'>Start a Conversation</span>
            <p>The team typically replies in a few minuts.</p>
            <button className='start-convo-button' onClick={() => handleConversation()}>
              <span>New Conversation</span>
              <IoMdSend className='start-icon' />
            </button>
        </div>
  )
}

export default ChatBoxIntro