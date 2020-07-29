export const createUser = (name, age) => {
  return {
    type: 'CREATE_USER',
    payload: {
      name: name || 'demo',
      age: age || 25,
    },
  }
}

export const updateUser = (currentUser, name, age) => {
  return {
    type: 'UPDATE_USER',
    currentUser,
    payload: {
      name,
      age,
    },
  }
}

export const deleteUser = (name) => {
  return {
    type: 'DELETE_USER',
    payload: {
      name,
    },
  }
}

export const selectedUser = (user) => {
  return {
    type: 'SELECTED_USER',
    payload: user,
  }
}
