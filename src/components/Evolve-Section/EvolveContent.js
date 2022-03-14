import React from 'react'
import { BsPlayFill } from 'react-icons/bs'


function EvolveContent() {
    return (
        <div className='evolve-content-wrapper'>
            <div className='evolve-content'>
                <div className='evolve-content-header'>
                    <span>EVOLVE. EXPLORE.</span>
                </div>
                <p>All the pods you hold dear, find them here first. From chart toppers to newly discovered gems.</p>
            </div>
            <button className='listen-btn'>
                <BsPlayFill />
                <span>Listen Now</span>
            </button>
        </div>
    )
}

export default EvolveContent