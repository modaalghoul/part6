import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const CreateAnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.ancedote.value
    props.store.dispatch(createAnecdote(content))
    event.target.ancedote.value = ''
  }

  return (
    <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name="ancedote" /></div>
      <button type="submit">create</button>
    </form>
    </>
  )
}

export default CreateAnecdoteForm