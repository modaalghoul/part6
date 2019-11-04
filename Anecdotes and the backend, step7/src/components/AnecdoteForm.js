import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const CreateAnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.ancedote.value
    event.target.ancedote.value = ''
    props.createAnecdote(content)
    props.setNotification(`anecdote created ${content}`, 5)
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
  createAnecdote, setNotification
}

export default connect(null, mapDispatchToProps)(CreateAnecdoteForm)