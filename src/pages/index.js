import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome to Cuba</h1>
    <p>
      Your official guide to exploring Cuba. Enjoy this delapidated yet
      dignified country, in all its Caribbean glory
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
