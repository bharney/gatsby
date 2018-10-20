import React from 'react'
import profile from './profile.jpg'
import { rhythm } from '../utils/typography'

// Import typefaces
import 'typography-theme-bootstrap'
// type BioProps = any
class Intro extends React.Component {

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: rhythm(.5),
        }}
      >
      <h2>Hey there stranger!</h2>
        <p>
        My name is Brian Harney and I love building incredible software. Our increasingly connected world demands services that are resiliant, fast, and always available. We've has been raising our expectations about web applications, and rethinking how we share code and ideas. But sometimes it can be difficult to understand all of the new technology because the web has been changing at a mile a minute. I want to show you some of the things I've learned in my own experiences building applications. I hope that these writings may help you in your search for an answers/solutions to your own problems.
        </p>
      </div>
    )
  }
}

export default Intro