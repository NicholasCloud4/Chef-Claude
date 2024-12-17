import React from 'react'
import styles from "./Main.module.css"

export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className={styles.ingredientsList} aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length >= 4 ? <div className={styles.getRecipeContainer}>
                <div ref={props.ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div> : <h3>Add at least 4 ingredients to get started!</h3>}

        </section>

    )
}
