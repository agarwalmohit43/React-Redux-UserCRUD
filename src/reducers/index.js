import { combineReducers } from 'redux'

const user = (listOfUsers = [{ name: 'Mohit', age: 25 }], action) => {
  if (action.type === 'CREATE_USER') {
    let fetchUser = listOfUsers.filter(
      (element) => element.name !== action.payload.name
    )
    return [...fetchUser, action.payload]
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

const selectedUser = (selectedUser = { name: 'Mohit', age: 25 }, action) => {
  if (action.type === 'SELECTED_USER') {
    return action.payload
  }

  return selectedUser
}

export default combineReducers({
  userData: user,
  selectedUser: selectedUser,
})
