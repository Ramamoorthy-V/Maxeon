import React from 'react'

function ChatBoxHeader({startConvo}) {
  return (
    <div className='chat-box-header'>
            <span className='chat-header'>Hi There</span>
            {
                !startConvo 
                    ? <p className='chat-header-text'>Hello Ask Us Anything, Share Your Feedback.</p>
                    : <p className='chat-header-main'>The team typically replies in a few minuts.</p>
            }      
        </div>
  )
}

export default ChatBoxHeader