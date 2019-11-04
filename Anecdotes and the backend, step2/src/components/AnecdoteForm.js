import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const CreateAnecdoteForm =  (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.ancedote.value
    event.target.ancedote.value = ''
    const newAnecdote = await anecdoteService.create(content)
    props.createAnecdote(newAnecdote)
    props.changeMessage(`anecdote created ${content}`)
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

const mapDispatchToProps = {
  createAnecdote, changeMessage
}

export default connect(null, mapDispatchToProps)(CreateAnecdoteForm)