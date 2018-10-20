import React from 'react'
import profile from './profile.jpg'
import { rhythm } from '../utils/typography'

// Import typefaces
import 'typography-theme-bootstrap'
// type BioProps = any
class Bio extends React.Component {

  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profile}
          alt={`Brian Harney`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: "50%"
          }} />
        <p>
          Written by <strong>Brian Harney</strong> who lives Oakland and loves building incredible software.{' '}
          <a href="https://twitter.com/bharney0">
            Follow me on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio