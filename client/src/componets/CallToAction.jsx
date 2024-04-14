import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div  className=" flex flex-col sm:flex-row p-3 justify-center items-center border border-teal-500 rounded-tl-xl rounded-bl-none rounded-br-xl rounded-tr-none text-center">
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
            Want to learn more about javaScript
        </h2>
        <p className='text-gray-500 my-2'>
            Check these resources with 100 javaScript Project
        </p>
        <Button gradientDuoTone="purpleToPink" className='rounded-tl-xl rounded-bl-none rounded-br-xl rounded-tr-none'>
            <a href='https://www.100jsprojects.com' target='_blank' rel='noopener noreferrer'>100 JavaScript Projects</a>'
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://tse1.mm.bing.net/th?id=OIP.kH7rZt6AHRjqOxZfs1EQ6AHaDO&pid=Api" alt="" />
      </div>
    </div>
  )
}
