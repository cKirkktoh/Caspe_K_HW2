import { RecipeBook } from './recipebook.js';

const recipeBook = new RecipeBook();

document.querySelector('#recipeForm button').addEventListener('click', addRecipe);
function addRecipe() {
  const name = document.querySelector('#recipeName').value;
  const ingredients = document.querySelector('#recipeIngredients').value;
  const instructions = document.querySelector('#recipeInstructions').value;

  recipeBook.addRecipe(name, ingredients, instructions);

  document.querySelector('#recipeName').value = '';
  document.querySelector('#recipeIngredients').value = '';
  document.querySelector('#recipeInstructions').value = '';

  // Render recipes
  renderRecipes();
}

// Function to render recipes
function renderRecipes() {
  const recipesElement = document.querySelector('#recipes');
  recipesElement.innerHTML = '';

  recipeBook.getRecipes().forEach(recipe => {
    const recipeItem = document.createElement('li');

    const recipeNameHeading = document.createElement('h3');
    recipeNameHeading.textContent = recipe.name;
    recipeItem.appendChild(recipeNameHeading);

    const ingredientsParagraph = document.createElement('p');
    ingredientsParagraph.textContent = 'Ingredients: ' + recipe.ingredients;
    recipeItem.appendChild(ingredientsParagraph);

    const instructionsParagraph = document.createElement('p');
    instructionsParagraph.textContent = 'Instructions: ' + recipe.instructions;
    recipeItem.appendChild(instructionsParagraph);

    recipesElement.appendChild(recipeItem);
  });
}

renderRecipes();
