import React from 'react'
import '../style/Style.css';

export const Buttons = () => {
  return (
    <div className='nav-bg'>
      <nav className='nav'>
        <a className='nav__link' href='/'>
          <h1>URQUERY</h1>
        </a>
        <button className='button'>
          Compilar
          </button>
        <button className='button'>About</button>
        <button className='button'>Document</button>
      </nav>
    </div>
  )
}
