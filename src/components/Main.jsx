import React from 'react'
import styles from "./Main.module.css"

export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsMap = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })

    /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a 
     * console.log(ingredients) after adding the ingredient, because 
     * **warning**: you aren't going to see the page update!
     * 
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */

    function handleSubmit(event) {
        event.preventDefault()
        // console.log("Form submitted!")
        const formData = new FormData(event.target)
        const newIngredient = formData.get("ingredient")
        // console.log(newIngredient)
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    return (
        <main>
            <form className={styles.addIngredientForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">+ Add Ingredient</button>
            </form>
            <ul>{ingredientsMap}</ul>
        </main>
    )
}
