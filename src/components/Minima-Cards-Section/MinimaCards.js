import React from 'react'
import MinimaHeader from '../Minima-Section/Minimaheader'
import ArrowCards from './ArrowCards'
import "../../styles/minima-cards-section.scss"

function MinimaCards() {
  return (
    <div>
        <MinimaHeader />
        <div className='minima-card-wrapper'>
            <ArrowCards />
            <ArrowCards />
            <ArrowCards />
        </div>
    </div>
  )
}

export default MinimaCards