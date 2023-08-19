"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef } from "react"

export default function WhatPeopleSaySection() {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      
      const h = setInterval(() => {
        if(!scrollRef.current) return
        scrollRef.current!.scrollLeft += 1

        const scroll = scrollRef.current.scrollLeft
        const maxScroll = scrollRef.current.offsetWidth
        if(scroll >= maxScroll * 0.8) {
          scrollRef.current.scrollLeft = 0
        }

      }, 1000/60)

      return () => {
        clearInterval(h)
      }
    }, [scrollRef])


    return (
      <section>
        <h3 className='text-2xl text-onBg-dark font-bold mx-6'>What People Say About Us</h3>
        <div className='flex flex-row gap-4 overflow-x-scroll' ref={scrollRef}>
          <PeopleSayCard/>
          <PeopleSayCard/>
          <PeopleSayCard/>
          <PeopleSayCard/>
          <PeopleSayCard/>
          <PeopleSayCard/>
          <PeopleSayCard/>
          <PeopleSayCard/>
        </div>
      </section>
    )
  }
  
  function PeopleSayCard() {
    return (
      <div className='bg-onBg-ltr rounded-md p-4 min-h-[200px]'>
          <Image
          src="/images/card_choose_quiz.png"
          height={96}
          width={96}
          alt="Nice"
          />
          <p>Quizzes aren't just about testing knowledge; they're gateways to deeper insights. This app has made studying a joy.</p>
          <span>- Emily R., Student</span>
      </div>
    )
  }