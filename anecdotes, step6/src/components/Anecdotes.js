import React from 'react'
import { vote } from '../reducers/anecdoteReducer'

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

const orderAnedotes = () => {
  
}

const Anecdotes = ({store}) => {
  return (
    <div>
      {store.getState().map(anecdote => <Anedote key={anecdote.id} anecdote={anecdote} 
      handleClick={()=>{store.dispatch(vote(anecdote.id))}} />)}
    </div>
  )
}

export default Anecdotes