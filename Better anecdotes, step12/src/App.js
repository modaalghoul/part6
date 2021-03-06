import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/Anecdotes'
import Notification from "./components/Notification"
import Filter from './components/Filter'

const App = (props) => {
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

export default App