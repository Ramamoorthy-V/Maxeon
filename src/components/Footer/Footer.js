import React from 'react'
import LowerFooter from './LowerFooter'
import '../../styles/footer.scss'
import UpperFooter from './UpperFooter'

function Footer() {
  return (
    <div className='footer-wrapper'>
        <UpperFooter />
        <LowerFooter />
    </div>
  )
}

export default Footer