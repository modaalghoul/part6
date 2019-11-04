import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { changeMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

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

const Anecdotes = (props) => {

  const handleVote = (anecdote) => {
    props.vote(anecdote.id)
    props.changeMessage(`you voted "${anecdote.content}"`)
  }

  return (
    <div>
      {props.anecdotesToShow.map(anecdote => <Anedote key={anecdote.id} anecdote={anecdote} 
      handleClick={()=>{handleVote(anecdote)}} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  const anecdotesToShow = () => {
    const filter = new RegExp(state.filter, 'i') 
    return state.anecdotes.filter(anecdote => anecdote.content.match(filter))
  }

  return {
    anecdotesToShow: anecdotesToShow()
  }
}

const mapDispatchToProps = {
  vote, changeMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes)