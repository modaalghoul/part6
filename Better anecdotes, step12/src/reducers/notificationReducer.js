const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message

    default:
      return state
  }
}

export const changeMessage = (message) => {
  return {
    type: 'SET_MESSAGE',
    message
  }
}

export default notificationReducer