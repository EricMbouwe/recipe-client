import React from 'react'
import Recipe from './Recipe'

function RecipeList({ recipes }) {
    return (
        <section className='max-w-7xl mx-auto my-20'>
            <h1 className='font-medium text-3xl'>
                Available Recipes
                <span className='ml-2'>({recipes.length})</span>
            </h1>

            <div className='mt-5 flex items-stretch gap-5 flex-wrap'>
                {recipes.length > 0 && recipes.map(recipe => <Recipe key={recipe.id} data={recipe} />)}
                {recipes.length === 0 && <div>No record found!</div>}
            </div>
        </section>
    )
}

export default RecipeList