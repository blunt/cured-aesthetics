import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
        />
        <p>
          Written by <strong>Maxim Siebert</strong> who lives and works in Toronto.{' '}
          <a href="https://twitter.com/maximsiebert">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
