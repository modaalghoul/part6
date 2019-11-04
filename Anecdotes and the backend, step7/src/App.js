import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/Anecdotes'
import Notification from "./components/Notification"
import Filter from './components/Filter'
import { connect } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect(()=>{
    props.initializeAnecdotes()
  },[])

  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default connect(null, {initializeAnecdotes})(App)