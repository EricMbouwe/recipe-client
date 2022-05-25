import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SelectedIngredients from './components/SelectedIngredients';

function App() {
  const [selectedIngrendients, setSelectedIgredients] = useState([])
  const [recipes, setRecipes] = useState([])
  const [ingredientData, setIngredientData] = useState([])
  const [fileteredIngredients, setFileteredIngredients] = useState([])
  const [loading, setLoading] = useState(true);

  const ingredientLocalUrl = '/api/v1/ingredients'
  // const ingredientProdUrl = 'http://futa-recipe-api.herokuapp.com/api/v1/ingredients'

  const recipeLocalUrl = '/api/v1/recipes'
  // const recipeProdUrl = 'http://futa-recipe-api.herokuapp.com/api/v1/recipes'

  useEffect(() => {
    getIngredientList()
  }, [])

  const getIngredientList = async () => {
    try {
      setLoading(true)
      const rawResponse = await fetch(ingredientLocalUrl)
      const data = await rawResponse.json();
      setIngredientData(data)
      setFileteredIngredients(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('ERROR: ', error.message)
    }
  }

  const searchIngredient = async (searchValue) => {
    const sanitizeStr = searchValue.trim()

    if (!sanitizeStr) {
      console.log('Set default ingredient list')
      setFileteredIngredients([...ingredientData])
    }

    try {
      console.log('Call api to request the search ingred: ', sanitizeStr)
      const rawResponse = await fetch(`${ingredientLocalUrl}/search`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search: sanitizeStr })
      });
      const data = await rawResponse.json();
      setFileteredIngredients(data)
    } catch (error) {
      console.log(error)
    }
  }

  const selectAnIngredient = (name) => {
    const newList = [...selectedIngrendients, name]
    const uniques = [...new Set(newList)]
    setSelectedIgredients(uniques)
  }

  const removeAnIngredient = (idx) => {
    const newList = selectedIngrendients.filter((_elt, id) => id !== idx)
    setSelectedIgredients(newList)
  }

  const findRecipes = async () => {
    if (!selectedIngrendients.length) return console.log('No ingredients selected!')

    try {
      setLoading(true)
      const rawResponse = await fetch(`${recipeLocalUrl}/search`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ list: selectedIngrendients })
      });
      const { recipes } = await rawResponse.json();
      setRecipes(recipes)

      setLoading(false)
    } catch (error) {
      setLoading(false)
    }

  }

  return (
    <>
      <Header onSelectIngredient={selectAnIngredient} ingredientData={fileteredIngredients} onSearchIngredient={searchIngredient} />
      {
        loading ?
          <div className='h-screen overflow-hidden flex items-center justify-center'>
            <p className='animate-spin'>Loading...</p>
          </div>
          :
          (<main className='px-5'>
            <SelectedIngredients selected={selectedIngrendients} onRemoveSelected={removeAnIngredient} onFindRecipe={findRecipes} />
            <RecipeList recipes={recipes} />
          </main>)
      }
    </>
  );
}

export default App;
