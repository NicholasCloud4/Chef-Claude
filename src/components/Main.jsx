import React from 'react'
import styles from "./Main.module.css"
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, setRecipeShown] = React.useState(false)



    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
    }

    return (
        <main>
            <form className={styles.addIngredientForm} action={addIngredient} >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>+ Add Ingredient</button>
            </form>

            {
                ingredients.length > 0 ?
                    <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
                    :
                    <h3>Add some ingredients to get started!</h3>
            }

            {
                recipeShown === true ?
                    <ClaudeRecipe />
                    : ""}

        </main>
    )
}
