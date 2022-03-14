import React, { useState } from 'react'
import '../../styles/chat.scss'

import { IoCloseOutline } from 'react-icons/io5'
import ChatboxPopup from '../../components/ChatBox-Popup/ChatboxPopup'

function Chat() {
    const [showChat, setShowChat] = useState(false)
    return (
        <>
            {
                showChat &&
                <ChatboxPopup />
            }

            <div className='chat-wrapper'>
                {
                    showChat ? <IoCloseOutline className='close-icon pointer-cursor' onClick={() => setShowChat(false)} /> : <span onClick={() => setShowChat(true)} className="pointer-cursor" >m.</span>
                }
            </div>
        </>
    )
}

export default Chat