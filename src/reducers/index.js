import { combineReducers } from 'redux'

const user = (listOfUsers = [], action) => {
  if (action.type === 'CREATE_USER') {
    return [...listOfUsers, action.payload]
  } else if (action.type === 'EDIT_USER') {
    let fetchUser = listOfUsers.filter(
      (element) => element.name !== action.payload.name
    )
    return [...fetchUser, action.payload]
  } else if (action.type === 'DELETE_USER') {
    return listOfUsers.filter(
      (userData) => userData.name !== action.payload.name
    )
  }
  return listOfUsers
}

export default combineReducers({
  userData: user,
})
