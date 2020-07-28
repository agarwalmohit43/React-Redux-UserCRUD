export const createUser = (name, age) => {
  return {
    type: 'CREATE_USER',
    payload: {
      name: name || 'demo',
      age: age || 25,
    },
  }
}

export const editUser = (name, age) => {
  return {
    type: 'EDIT_USER',
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
