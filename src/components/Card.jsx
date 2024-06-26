import React from 'react'
import NoImage from '../assets/no-image.png'

const Card = ({ title, image, description, date }) => {
  return (
    <article className="relative cursor-pointer hover:bg-indigo-300 transition duration-300 transform hover:scale-110 rounded-lg">
      <h2 className='font-extrabold text-md h-14 px-2 mb-10 text-wrap'>{title}</h2>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
        <img src={image === null ? NoImage : image} alt="article cover image" className="pointer-events-none object-cover" />
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 text-wrap">{description}</p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">{Date(date)}</p>
    </article>
  )
}

export default Card