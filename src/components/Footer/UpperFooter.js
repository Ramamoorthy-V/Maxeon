import React from 'react'

function UpperFooter() {
  return (
    <div className='upper-footer-wrapper' >
        <div className='rocket-section'>
            <img src='/images/rocket 1.png' alt='rocket' />
        </div>
        <div className='upperfooter-content'>
            <div className='upperfooter-content-header'>
                <p>Accusantium doloremque laudantium</p>
            </div>
            <div className='upperfooter-content-points'>
                <div><img src='/images/Group.png' alt='path' /> <span>Neque porro quisquam</span></div>
                <div><img src='/images/Group.png' alt='path' /> <span>Neque porro quisquam</span></div>
                <div><img src='/images/Group.png' alt='path' /> <span>Neque porro quisquam</span></div>
                <div><img src='/images/Group.png' alt='path' /> <span>Neque porro quisquam</span></div>
                
            </div>
        </div>
    </div>
  )
}

export default UpperFooter