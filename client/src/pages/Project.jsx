import React from 'react'
import  CallToAction from "../componets/CallToAction"

export default function Project() {
  return (
    <div className='min-h-scrren max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projecs</h1>
      <p className='text-md text-gray-500'>Build fun and engaing projecs while learning HTML, CSS and JavaScript!</p>
      <CallToAction/>
    </div>
  )
}
