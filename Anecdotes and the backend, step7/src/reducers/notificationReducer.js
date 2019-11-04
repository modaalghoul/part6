
const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
    case 'CLEAR_MESSAGE':
      return ''
    default:
      return state
  }
}

export const setNotification = (message, seconds) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(clearNotification())
    }, seconds * 1000)
    
    dispatch({
      type: 'SET_MESSAGE',
      message
    })
  }
}

export const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_MESSAGE'
    })
  }
}



export default notificationReducer