import React from 'react'

const UserItem = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td className="positive">{user.age}</td>
      <td className="warning">
        <button type="button" className="ui primary button">
          Edit
        </button>
        <button type="button" className="ui primary button">
          Delete
        </button>
      </td>
    </tr>
  )
}

export default UserItem
