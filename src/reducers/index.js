import { combineReducers } from 'redux'

const initialState = [
  { name: 'Ram', age: 5 },
  { name: 'Mohit', age: 25 },
  { name: 'Alex', age: 15 },
  { name: 'Sam', age: 65 },
  { name: 'MP', age: 23 },
  { name: 'Remy', age: 55 },
]

const user = (listOfUsers = initialState, action) => {
  if (action.type === 'CREATE_USER') {
    let fetchUser = listOfUsers.filter(
      (element) => element.name !== action.payload.name
    )
    return [...fetchUser, action.payload]
  } else if (action.type === 'UPDATE_USER') {
    let updatedListOfUsers = listOfUsers.map((user) => {
      if (user.name === action.currentUser) return action.payload
      else return user
    })
    return [...updatedListOfUsers]
  } else if (action.type === 'DELETE_USER') {
    return listOfUsers.filter(
      (userData) => userData.name !== action.payload.name
    )
  }
  return listOfUsers
}

const selectedUser = (selectedUser = null, action) => {
  if (action.type === 'SELECTED_USER') {
    return action.payload
  }

  return selectedUser
}

export default combineReducers({
  userData: user,
  selectedUser: selectedUser,
})
