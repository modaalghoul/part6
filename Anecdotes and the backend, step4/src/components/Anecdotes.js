import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
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
    props.vote(anecdote)
    props.setNotification(`you voted "${anecdote.content}"`, 5)
  }

  return (
    <div>
      {props.anecdotesToShow.map(anecdote => <Anedote key={anecdote.id} anecdote={anecdote} 
      handleClick={()=>{handleVote(anecdote)}} />)}
    </div>
  )
}

const anecdotesToShow = ({anecdotes, filter}) => {
  const newfilter = new RegExp(filter, 'i') 
  return anecdotes.filter(anecdote => anecdote.content.match(newfilter)).sort((a, b)=> b.votes - a.votes)
}

const mapStateToProps = (state) => {
  console.log('STATE=',state)
  return {
    anecdotesToShow: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  vote, setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes)