/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  return (
    <div className="bio">
        <div className="definition-entry">
          <a className="headword">Snark Brain</a>
          <span className="pronunciation"> (snärk brān) </span> 
          <span class="part-of-speech"> n. </span>
          <span className="definition-list">A pejorative term for a collective online mindset characterized by pervasive cynicism and the systematic distortion of truth, used to organize and justify coordinated hate campaigns against an online creator.</span>
        </div>
    </div>
  )
}

export default Bio
