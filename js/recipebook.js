// Recipe class
export class Recipe {
    constructor(id, name, ingredients, instructions) {
      this.id = id;
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }
  
    updateName(newName) {
      this.name = newName;
    }
  
    updateIngredients(newIngredients) {
      this.ingredients = newIngredients;
    }
  
    updateInstructions(newInstructions) {
      this.instructions = newInstructions;
    }
}

// RecipeBook class
export class RecipeBook {
    constructor() {
      this.recipes = [];
    }
  
    addRecipe(name, ingredients, instructions) {
      const id = this.recipes.length + 1; // Generate unique ID
      const recipe = new Recipe(id, name, ingredients, instructions);
      this.recipes.push(recipe);
    }
  
    removeRecipe(id) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    }
  
    getRecipes() {
      return this.recipes;
    }
}
