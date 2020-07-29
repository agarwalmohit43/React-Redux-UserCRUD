import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import UserItem from './UserItem'
import { deleteUser } from '../action'

const UserDisplay = ({ userInfo }) => {
  const renderTableRow = userInfo.map((user, index) => {
    return <UserItem user={user} key={index} />
  })

  return (
    <div>
      <table className="ui sortable celled table">
        <thead>
          <tr>
            <th className="">Name</th>
            <th className="sorted descending">Age</th>
            <th className="">Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRow}</tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userInfo: state.userData }
}

export default connect(mapStateToProps)(UserDisplay)
