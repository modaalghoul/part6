import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {

  test('returns new state with action VOTE', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        id: 1,
        votes: 0
      },
      {
        content: 'state changes are made with actions',
        id: 2,
        votes: 0
      }]
  
    const action = {
      type: 'VOTE',
      data: {
        id: 2
      }
    }
  
    deepFreeze(state)
    const newState = anecdoteReducer(state, action)
  
    expect(newState.length).toBe(2)
  
    expect(newState).toContainEqual(state[0])
  
    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      votes: 1,
      id: 2
    })
  })
})