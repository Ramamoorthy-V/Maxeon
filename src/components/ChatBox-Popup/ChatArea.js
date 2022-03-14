import React, { useEffect, useRef, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'


function ChatArea() {

    const [chatText, setChatText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const focusRef = useRef(null);

    const chatTextHandler = (event) => {
        setChatText(event.target.value);
    }

    const chatHistoryHandler = async () => {
        const chat = [...chatHistory, chatText, "..."];
        setChatHistory(chat);
        setChatText('');

        const response = await fetch('https://api.adviceslip.com/advice').then(res => res.json())
        chat.pop();
        const reply = [...chat, response.slip.advice];
        setChatHistory(reply);

    }

    useEffect(() => {
        if(focusRef){
            focusRef.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth'});
            })
        }
    },[])


    return (
        <>
            <div className='chatarea-wrapper' ref={focusRef}>
                {
                    chatHistory && chatHistory.length ? chatHistory.map((item, index) => (                        
                        <div className='chat-text' key={index}>
                            {item !== '...' ? item : <BsThreeDots className='chat-text-loading' /> }
                        </div>
                    ))
                    : null
                }
            </div>
            <hr />
            <div className='text-area'>
                <textarea placeholder='Send a message...' value={chatText} onChange={chatTextHandler} />
                <IoMdSend className='send-btn' onClick={chatHistoryHandler} />
            </div>
        </>
    )
}

export default ChatArea