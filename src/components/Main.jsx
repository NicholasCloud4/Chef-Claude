import React from 'react'
import styles from "./Main.module.css"

export default function Main() {
    /**
     * Challenge: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */

    const [ingredients, setIngerdients] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        /**
         * Like before, don't worry about this FormData stuff yet.
         * Just use the newIngredient below to help you finish the
         * challenge.
         */

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngerdients((prevIngredients) => {
            return [...prevIngredients, newIngredient]
        })
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
            <ul>{ingredientsListItems}</ul>
        </main>
    )
}
