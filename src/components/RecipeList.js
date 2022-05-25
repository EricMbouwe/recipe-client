import React from 'react'
import Recipe from './Recipe'

function RecipeList() {
    return (
        <section className='max-w-7xl mx-auto my-20'>
            <h1 className='font-medium text-3xl'>
                Available Recipes
                <span className='ml-2'>(185)</span>
            </h1>

            <div className='mt-5 flex items-stretch gap-5 flex-wrap'>
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </section>
    )
}

export default RecipeList