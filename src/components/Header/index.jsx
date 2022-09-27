import React from 'react'
import './Header.css'

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header-logo'>
        <a href='/'>
          <img
            src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'
            alt='logo'
          />
        </a>
      </div>
      <div className='header-user'>
        <a href='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='user'
          />
        </a>
      </div>
    </header>
  )
}
