import React from 'react'
import { connect } from 'react-redux'
import { deleteUser, editUser } from '../action'

const UserItem = ({ user, deleteUser, editUser }) => {
  const editUserOnClick = () => {
    editUser(user.name)
  }

  return (
    <tr>
      <td>{user.name}</td>
      <td className="positive">{user.age}</td>
      <td className="warning">
        <button
          type="button"
          className="ui primary button"
          onClick={editUserOnClick}
        >
          Edit
        </button>
        <button
          type="button"
          className="ui primary button"
          onClick={() => deleteUser(user.name)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { userData: state.userData }
}

export default connect(mapStateToProps, { deleteUser, editUser })(UserItem)
