import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import SelectedIngredients from './components/SelectedIngredients';

function App() {
  return (
    <>
      <Header />
      <SelectedIngredients />
      <RecipeList />
    </>
  );
}

export default App;
