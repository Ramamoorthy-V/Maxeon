import React from 'react'
import '../../styles/signup.scss';
import { IoCloseOutline } from 'react-icons/io5'


function Signup({ setShowSignup }) {
  return (
    <div className='signup-wrapper'>
      <div className='signup-form'>
        <IoCloseOutline className='form-close-icon pointer-cursor' onClick={() => setShowSignup(false)} />
        <p>Sign Up</p>
        <div className='signup-fields'>
          <label>Full Name:</label>
          <input type="text" placeholder='First and Last Name' />
        </div>
        <div className='signup-fields'>
          <label>Email Address:</label>
          <input type="text" placeholder='username@gmail.com' />
        </div>
        <div className='signup-fields'>
          <label>Password: </label>
          <input type="text" placeholder='Password' />
        </div>
        <div className='signup-fields'>
          <label>Confrim Password:</label>
          <input type="text" placeholder='Re-enter Password' />
        </div>
        <button className='signup-btn'>SignUp</button>
        <span>By signing up, you agree to our Terms of Service & Privacy Policy</span>
      </div>
    </div>
  )
}

export default Signup