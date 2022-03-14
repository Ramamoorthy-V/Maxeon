import React from 'react'
import '../../styles/home.scss'

import Altcard from '../../components/Minima-Section/Altcard'
import Footer from '../../components/Footer/Footer'
import Searchbar from '../../components/Searchbar/Searchbar'
import Timeline from '../../components/Timeline/Timeline'
import MinimaCards from '../../components/Minima-Cards-Section/MinimaCards'
import Chat from '../Chat/Chat'
import EvolveSection from '../../components/Evolve-Section/EvolveSection'

function Home() {
  return (
    <div>
        <div className='home-main-wrapper'>
            <img src='/images/Bitmap.jpg' alt='Home' />
            <p>Where words fail, Music speaks.</p>
        </div>
        <Chat />
        <Searchbar />
        <Timeline />
        <MinimaCards />
        <EvolveSection />
        <img width='100%' height='100%' src='/images/Emuse.jpg' alt='Emuse' />
        <Altcard />
        <Footer />
    </div>
  )
}

export default Home