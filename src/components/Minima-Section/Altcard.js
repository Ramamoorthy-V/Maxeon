import React from 'react'
import '../../styles/minima-section.scss'
import Card from './Card'
import Minimaheader from './Minimaheader'

function Altcard() {
    return (
        <React.Fragment>
            <Minimaheader />
            <div className='altcard-wrapper'>
                <Card />
                <Card />
                <Card />
            </div>
        </React.Fragment>
    )
}

export default Altcard