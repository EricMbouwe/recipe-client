import React from 'react'

function Recipe({ data }) {
    return (
        <div className='shadow-lg bg-lime-200 rounded-md py-2 px-4'>
            {/* <img
                className='object-cover max-w-xs'
                scr={data.image}
                alt={data.name}
            /> */}
            <p>{data.name}</p>
        </div>
    )
}

export default Recipe