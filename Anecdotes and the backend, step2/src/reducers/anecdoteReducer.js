
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const anecdoteToChange = state.find(anc => anc.id === action.data.id)
      const changedAncedote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map(anc => anc.id === action.data.id ? changedAncedote : anc)
        .sort((a, b)=> b.votes - a.votes)
    case 'NEW_ANECDOTE':
      const newAnecdote = action.data
      return [...state, newAnecdote]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const vote = (id) => {
  return {type: 'VOTE', data: { id }}
}

export const createAnecdote = (anecdote) => {
  return {type: 'NEW_ANECDOTE', data: anecdote }
}

export const initializeAnecdotes = (anecdotes) => {
  return {type: 'INIT_ANECDOTES', data: anecdotes}
}

export default reducer