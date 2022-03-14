import React from 'react'
import '../../styles/searchbar.scss'
import {AiOutlineSearch} from 'react-icons/ai';

function Searchbar() {
  return (
    <div className='searchbar-wrapper'>
        <AiOutlineSearch className='search-icon'/>
        <input className='search-input' placeholder='Search for Playlists, Albums or Songs'/>

    </div>
  )
}

export default Searchbar