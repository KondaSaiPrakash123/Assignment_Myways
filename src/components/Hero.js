import React from "react"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="text">
          <h1>Apply and hear back every time</h1>
          <p>
          MyWays Blogs
          </p>
        </div>
        <div className="button">
          <Link to="/myways-assignment/signup">Start</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
