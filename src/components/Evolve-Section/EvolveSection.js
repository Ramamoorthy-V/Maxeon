import React from 'react'
import EvolveContent from './EvolveContent'

import "../../styles/evolvesection.scss"
import EvolveGrid from './EvolveGrid'


function EvolveSection() {
  return (
    <div className='evolve-section-wrapper'>
        <EvolveGrid />
        <EvolveContent />
    </div>
  )
}

export default EvolveSection