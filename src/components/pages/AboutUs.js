import React from 'react';
import { useEffect, useState } from "react"
import '../../App.css';

export default function AboutUs() {
    const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

    return (
        <div className='aboutus'>
              <img className='himage' src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3904&q=80"></img>
              <div style={{
            transform: `translateY(${offset * -8}px)`,
          }} className='text-block'>
        
        <h4><p>Ji grew up on the water in Florida.  Some of my earliest memories are from when I was four or five, sitting on my dads lap at the helm of our first boat- a late 1960's era 14' Orlando Clipper trihull.  I started sailing through the Bradenton Yacht Club when I was ten and continued until my family and I relocated to Vermont shortly after my 15th birthday.  Life and location can change anyone's focus, and mine was no different- without access to water, my attention turned to aviation.  College, work, military service and life in general followed for the next 20 years or so.  After separating from the military, I decided to stay in Utah.  Then I met Conni.  </p>
            
        <p>And me, Conni? How do I condense the sum of my existence into a nutshell? Where do I start? Well, at the beginning, I guess. I was born to a nomadic mother, and I have cultivated that characteristic throughout my life as well. I have followed my nose across the US to diverse places ranging from living on Capitol Hill in Washington, D.C. to far rural North Dakota.</p>

        <p>However, my escapades never took me out on the water, beyond the occasional SCUBA charter. Will this deter us? Of course not! I have the utmost faith in Ji’s prior nautical experience, technical and mechanical brilliance, and natural ability to teach. Couple these with my own thirst for knowledge, self-reliance, and love of adventure, and you have a recipe for what promises to be magical!</p>

        <p>We are excited to embark on this journey and share it with you as we grow and learn. We hope to be as inspirational to you as others have been to us. And, most importantly, thank you for taking the time to get to know us!</p>

        <p>After being together for two years, we decided to change careers and move into the tech industry as web developers.  Partially because we feel that the webdev industry is growing, and partially because we wanted the geographic freedom of a job we could work remotely.  The conversation of where to move to quickly evolved into a plan to live on a boat full time.  Shortly after this plan was fleshed out and the steps were taken to begin the career transition, Covid hit and we took the time to reevaluate this plan as many full time cruisers were adversely affected by the lockdowns.  While the pandemic was most likely a once in a lifetime event, the need for a home port to return to was glaringly obvious to us.  The plan shifted from full time on the boat to winters in the Bahamas aboard with the hurricane season spent in a house somewhere in North Carolina.</p>
        
        <p>That's where we are today.  We hope you enjoy what we have here so far and stick around as the plan unfolds and our adventures begin.  --J&C</p></h4>
        </div>
        </div>
    );
}