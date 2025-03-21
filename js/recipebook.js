// Recipe class
export class Recipe {
  constructor(id, name, ingredients, instructions, category, rating) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.category = category;
    this.rating = rating;
  }
}

// RecipeBook class
export class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  // Add a new recipe
  addRecipe(name, ingredients, instructions, category, rating) {
    const id = this.recipes.length + 1;
    const recipe = new Recipe(id, name, ingredients, instructions, category, rating);
    this.recipes.push(recipe);
  }

  // Get all recipes
  getRecipes() {
    return this.recipes;
  }
}