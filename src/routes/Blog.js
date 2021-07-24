import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Blogcontroller from "../components/Blogcontroller"

function Blog() {
  document.title = "MyWays | Blog"
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default Blog