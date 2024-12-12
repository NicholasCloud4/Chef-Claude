import React from 'react'
import styles from "./Main.module.css"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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
                    <section>
                        <h2>Ingredients on hand:</h2>
                        <ul className={styles.ingredientsList} aria-live="polite">{ingredientsListItems}</ul>
                        <div className={styles.getRecipeContainer}>
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                    </section>
                    :
                    <h3>Add some ingredients to get started!</h3>
            }

        </main>
    )
}
