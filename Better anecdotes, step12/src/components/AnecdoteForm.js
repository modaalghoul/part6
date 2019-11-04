import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const CreateAnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.ancedote.value
    props.createAnecdote(content)
    props.changeMessage(`anecdote created ${content}`)
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

const mapDispatchToProps = {
  createAnecdote, changeMessage
}

export default connect(null, mapDispatchToProps)(CreateAnecdoteForm)