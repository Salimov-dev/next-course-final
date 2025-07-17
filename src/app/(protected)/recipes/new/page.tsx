"use client";

import RecipeForm from "@/forms/recipe.form";

export default function NewRecipePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Создать новый рецепт</h1>
      <RecipeForm />
    </div>
  );
}
