import React from 'react'
import styles from "./Main.module.css"
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

export default function Main() {

    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */

    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] = React.useState(false)



    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown((prevRecipeShown) => {
            return (!prevRecipeShown)
        })
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
                    <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />
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
