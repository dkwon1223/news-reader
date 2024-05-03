import React from 'react'

const Card = ({ index, title, image, description, date }) => {
  return (
    <article key={index} className="relative">
      <h2 className='font-extrabold h-14 px-2 mb-2'>{title}</h2>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img src={image} alt="article cover image" className="pointer-events-none object-cover group-hover:opacity-75" />
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{description}</p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">{Date(date)}</p>
    </article>
  )
}

export default Card