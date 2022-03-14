import React, { useState } from 'react'
import ChatArea from './ChatArea'
import ChatBoxHeader from './ChatBoxHeader'
import ChatBoxIntro from './ChatBoxIntro'

function ChatboxPopup() {
  const [startConvo, setStartConvo] = useState(false)

  const handleConversation = () => {
    setStartConvo(true);
  }

  return (
    <div className='chat-box-wrapper'>
        <ChatBoxHeader startConvo={startConvo} />
        {
          startConvo ? <ChatArea /> : <ChatBoxIntro handleConversation={handleConversation} />
        }        
    </div>
  )
}

export default ChatboxPopup