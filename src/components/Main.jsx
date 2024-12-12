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

    /**
     * Challenge:
     * Only display the div.get-recipe-container if the ingredients list
     * has more than 3 items in it. (Fewer than that and it might not
     * give great results from the chef 🤖👩‍🍳)
     */

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
                        {ingredients.length === 3 ? <div className={styles.getRecipeContainer}>
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button>Get a recipe</button>
                        </div> : <h3>Add at least 3 ingredients to get started!</h3>}

                    </section>
                    :
                    <h3>Add some ingredients to get started!</h3>
            }

        </main>
    )
}
