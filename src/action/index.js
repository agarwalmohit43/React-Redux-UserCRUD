export const createUser = (name, age) => {
  return {
    type: 'CREATE_USER',
    payload: {
      name,
      age,
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
