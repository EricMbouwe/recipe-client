import React from 'react'

function IngredientList({ data, onSelectIngredient }) {

    return (
        <div className='absolute top-full inset-x-0 mt-2 p-4 max-h-96 overflow-y-auto text-gray-900 bg-slate-100 rounded-md shadow-md z-20'>
            <ul className='space-y-1'>
                {data.length && data.map((ingredientName, id) =>
                    <li
                        key={id}
                        className='hover:bg-slate-50 cursor-pointer'
                        onClick={() => onSelectIngredient(ingredientName)}
                    >{ingredientName}</li>
                )}
            </ul>
        </div>
    )
}

export default IngredientList