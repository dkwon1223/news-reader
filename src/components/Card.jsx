import React from 'react'

const Card = ({ index, title, image, description, date }) => {
  return (
    <article className="relative cursor-pointer hover:bg-indigo-300 transition duration-300 transform hover:scale-110 rounded-lg">
      <h2 className='font-extrabold text-2xl h-14 px-2 mb-2'>{title}</h2>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
        <img src={image} alt="article cover image" className="pointer-events-none object-cover" />
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 text-wrap">{description}</p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">{Date(date)}</p>
    </article>
  )
}

export default Card