import React, { useEffect, useState } from "react"
import tw, { css } from "twin.macro"

const App = () => {
  const [status, setStatus] = useState("loading...")
  const [testimonials, setTestimonials] = useState(null)

  return (
    <>
      <h1>Testimonials to load here...</h1>
    </>
  )
}

export default App
