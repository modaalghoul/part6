import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const anecdoteToChange = state.find(anc => anc.id === action.data.id)
      const changedAncedote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map(anc => anc.id === action.data.id ? changedAncedote : anc)
    case 'NEW_ANECDOTE':
      const newAnecdote = action.data
      return [...state, newAnecdote]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = {...anecdote, votes: anecdote.votes+1}
    const votedAnecdote = await anecdoteService.update(changedAnecdote)
    dispatch({
      type: 'VOTE',
      data: {...votedAnecdote}
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer