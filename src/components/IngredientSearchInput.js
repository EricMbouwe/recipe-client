import React, { useState } from 'react'
import IngredientList from './IngredientList'

function IngredientSearchInput({ onSelectIngredient, ingredientData, onSearchIngredient }) {
    const [search, setsearch] = useState('')

    const handleChange = (e) => {
        const val = e.target.value
        setsearch(val)
        onSearchIngredient(val)
    }

    return (
        <div className='relative min-w-[500px]'>
            <input
                className='p-4 w-full border border-slate-400 rounded-md shadow-md focus:outline-none'
                type="text"
                id="ingredientName"
                name="ingredientName"
                placeholder='Please choose your ingredients'
                value={search}
                onChange={handleChange}
                autoComplete="off"
            />
            <IngredientList data={ingredientData} onSelectIngredient={onSelectIngredient} />
        </div>
    )
}

export default IngredientSearchInput