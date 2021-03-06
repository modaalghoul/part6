import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { changeMessage } from '../reducers/notificationReducer'

const Anedote = ({anecdote, handleClick}) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const Anecdotes = ({store}) => {

  const handleVote = (anecdote) => {
    store.dispatch(vote(anecdote.id))
    store.dispatch(changeMessage(`you voted "${anecdote.content}"`))
  }

  return (
    <div>
      {store.getState().anecdotes.map(anecdote => <Anedote key={anecdote.id} anecdote={anecdote} 
      handleClick={()=>{handleVote(anecdote)}} />)}
    </div>
  )
}

export default Anecdotes