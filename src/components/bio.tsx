import React from 'react'
import Img from "gatsby-image"
import { rhythm } from '../utils/typography'

// Import typefaces
import 'typography-theme-bootstrap'
type BioProps = any
class Bio extends React.Component<BioProps, {}> {
  
  render() {
    const { data } = this.props
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
       <Img fluid={data.profile.childImageSharp.fluid}
       alt={`Brian Harney`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
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