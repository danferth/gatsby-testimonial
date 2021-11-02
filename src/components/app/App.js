import React, { useEffect, useState } from "react"
import tw, { css } from "twin.macro"
import axios from "axios"

// import these libraries
import ReactStars from "react-stars"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const App = () => {
  const [status, setStatus] = useState("loading...")
  const [testimonials, setTestimonials] = useState(null)

  useEffect(() => {
    if (status !== "loading...") return
    axios("api/get-testimonials").then(result => {
      if (result.status !== 200) {
        console.error("Error loading testimonials")
        console.error(result)
        return
      }
      setTestimonials(result.data.messages)
      setStatus("loaded")
    })
  }, [status])

  const getAvatar = () => {
    const random = Math.floor(Math.random() * (testimonials.length - 0 + 1) + 0)
    const imgUrl = `https://avatars.dicebear.com/api/human/${random}.svg?mood[]=happy`
    return imgUrl
  }

  return (
    <div tw="max-w-4xl mx-auto pt-56">
      <Carousel
        className="main"
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
      >
        {testimonials &&
          testimonials.map((testimonial, index) => (
            <div key={index}>
              <img
                tw="w-16! h-16!"
                src={getAvatar()}
                height="50"
                width="50"
                alt="avatar"
              />
              <div className="testimonial">
                <ReactStars
                  className="rating"
                  count={testimonial.rating}
                  size={24}
                  color1={"#ffd700"}
                  edit={false}
                  half={false}
                />
                <p className="text">{testimonial.text}</p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  )
}

export default App
