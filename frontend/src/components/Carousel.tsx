'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import { PARTNERS } from '@/data/partners'

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 3, spacing: 20, origin: 'center' },
      breakpoints: {
        '(max-width: 1024px)': { slides: { perView: 2, origin: 'center' } },
        '(max-width: 768px)': { slides: { perView: 1 } },
      },
      slideChanged(slider: KeenSliderInstance) {
        setCurrentSlide(slider.track.details.rel)
      },
      created(slider: KeenSliderInstance) {
        setCurrentSlide(slider.track.details.rel)
      },
    }
  )

  // Manual autoplay
  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return
    const interval = setInterval(() => {
      slider.next()
    }, 3000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <>
    <hr className="my-1 h-0.5 border-t-0 bg-gray-100 md:w-70/100 w-90/100 mx-auto" />
    <p className='text-2xl text-center mt-3'>Naši partnerji</p>
    <div className="relative overflow-y-hidden w-full lg:w-65/100 mx-auto mb-4">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="keen-slider__slide flex justify-center items-center"
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={400}
              height={500}
              className='opacity-85'
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        ))}
      </div>


      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {PARTNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`h-2 w-2 rounded-full transition-opacity ${
              idx === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
    </>
  )
}
