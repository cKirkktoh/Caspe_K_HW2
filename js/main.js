import { RecipeBook } from './modules/recipebook.js';

const recipeBook = new RecipeBook();

// Simulate loading delay
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, 3000); 
});

// Add Recipe
document.querySelector('#recipeForm button').addEventListener('click', addRecipe);
function addRecipe() {
  const name = document.querySelector('#recipeName').value.trim();
  const ingredients = document.querySelector('#recipeIngredients').value.trim();
  const instructions = document.querySelector('#recipeInstructions').value.trim();
  const category = document.querySelector('#recipeCategory').value;
  const rating = parseInt(document.querySelector('#recipeRating').value);

  // Validation
  if (!name || !ingredients || !instructions || rating < 1 || rating > 5) {
    alert('Please fill out all fields and provide a valid rating (1-5).');
    return;
  }

  // Add the recipe
  recipeBook.addRecipe(name, ingredients, instructions, category, rating);

  document.querySelector('#recipeName').value = '';
  document.querySelector('#recipeIngredients').value = '';
  document.querySelector('#recipeInstructions').value = '';
  document.querySelector('#recipeRating').value = '';

  renderRecipes();
}

// Render Recipes
function renderRecipes() {
  const recipesElement = document.querySelector('#recipes');
  recipesElement.innerHTML = '';

  recipeBook.getRecipes().forEach(recipe => {
    const recipeItem = document.createElement('li');

    // Recipe Name
    const recipeNameHeading = document.createElement('h3');
    recipeNameHeading.textContent = recipe.name;
    recipeItem.appendChild(recipeNameHeading);

    // Recipe Category
    const categorySpan = document.createElement('span');
    categorySpan.textContent = `Category: ${recipe.category}`;
    categorySpan.style.color = '#ff6f61';
    recipeItem.appendChild(categorySpan);

    // Recipe Rating
    const ratingSpan = document.createElement('span');
    ratingSpan.textContent = `Rating: ${'★'.repeat(recipe.rating)}`;
    ratingSpan.style.color = '#ffd700';
    recipeItem.appendChild(ratingSpan);

    // Recipe Ingredients
    const ingredientsParagraph = document.createElement('p');
    ingredientsParagraph.textContent = 'Ingredients: ' + recipe.ingredients;
    recipeItem.appendChild(ingredientsParagraph);

    // Recipe Instructions
    const instructionsParagraph = document.createElement('p');
    instructionsParagraph.textContent = 'Instructions: ' + recipe.instructions;
    recipeItem.appendChild(instructionsParagraph);

    // Append the recipe item to the list
    recipesElement.appendChild(recipeItem);
  });
}

// Initial Render
renderRecipes();