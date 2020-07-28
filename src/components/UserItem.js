import React from 'react'
import { connect } from 'react-redux'
import { deleteUser, editUser, selectedUser } from '../action'
import UserInput from './UserInput'

const UserItem = ({ user, deleteUser, editUser, selectedUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td className="positive">{user.age}</td>
      <td className="warning">
        <div className="ui buttons">
          <button
            type="button"
            className="ui primary button"
            onClick={() => selectedUser(user)}
          >
            Edit
          </button>
          <button
            type="button"
            className="ui negative button"
            onClick={() => deleteUser(user.name)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return { editUser: state.selectedUser }
}

export default connect(mapStateToProps, { deleteUser, editUser, selectedUser })(
  UserItem
)
