import React from 'react'

function Recipe({ data }) {
    return (
        <div className='shadow-lg rounded space-y-5 min-h-[200px]'>
            <img
                className='object-cover max-w-xs'
                scr={data.image}
                alt={data.name}
            />
            <p>{data.name}</p>
        </div>
    )
}

export default Recipe