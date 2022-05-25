import React from 'react'
import IngredientList from './IngredientList'

function IngredientSearchInput() {
    return (
        <div className='relative min-w-[500px]'>
            <input
                className='p-4 w-full border border-slate-400 rounded-md shadow-md focus:outline-none'
                type="text"
                id="ingredientName"
                name="ingredientName"
                placeholder='Please choose your ingredients'
            />
            <IngredientList />
        </div>
    )
}

export default IngredientSearchInput