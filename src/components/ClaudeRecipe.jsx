import React from 'react'
import style from "./Main.module.css"
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return (
        <section className={style.suggestedRecipeContainer}>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>

        </section>
    )
}
