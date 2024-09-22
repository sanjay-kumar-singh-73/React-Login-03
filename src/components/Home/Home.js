import React from 'react'
import './Home.css'
import Img from '../../components/Assests/imagecute (2).png'

function Home() {
  return (
    <div className='home'>
      <div className='right'>
        <form>
          <h2>Login</h2>
          <input type='text' className='sanjay' placeholder='User-Name' required/><br/>
          <input type='email' className='sanjay' placeholder='User-Email' required/><br/>
          <input type='password' className='sanjay' placeholder='User-Password' required/><br/>
          <textarea placeholder='Write Massage' className='text'></textarea><br/>
          <button className='S-btn'>Send Massage</button>
        </form>
      </div>
      <div className='left'>
        <img src={Img} alt='' />
      </div>
    </div>
  )
}

export default Home
