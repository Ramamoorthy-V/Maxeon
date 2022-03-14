import React, { useEffect, useState } from 'react'
import '../../styles/timeline.scss'

function Timeline() {
  const listContent = new Array(4).fill("emuse brings you live sports")
  const [start, setStart] = useState(0)

  useEffect(() => {
    setInterval(() => {
        setStart(prevState =>  prevState < listContent.length-1 ?   prevState+1 : 0 );
    }, 5000)
  },[])

  return (
    <div className='timeline-wrapper'>
      <div className='timeline-content'>
        <p>LIVE&nbsp;SPORTS. MUSIC. NEWS. PODCASTS.</p>
      </div>
      <div className='timeline'>
        <ul>
          {
            listContent.map((item, index) => <li className={start === index ? 'timeline-active' : 'timeline-inactive'} key={index} >{item}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Timeline