import React from 'react'
import {FaStar} from "react-icons/fa6";
import { Avatar } from 'flowbite-react';
import ProfilePic from "../assets/profile.jpg"

const ReviewCard = () => {
  return (

        <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-3 text-left'>"I love the variety of books available on this platform! The user-friendly interface makes buying and selling a breeze. However, it would be great to see more user reviews and perhaps an option to expand the book collection. Overall, a fantastic experience - highly recommend!"</p>
                    <Avatar 
                    alt='avatar of Jese'
                    img={ProfilePic}
                    rounded
                    className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium text-left'>Manisha Rani</h5>
                    <p className='text-base text-left'>CEO, ABC Company</p>
                </div>
            </div>
      
    
  )
}

export default ReviewCard
