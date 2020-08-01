import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import UserItem from './UserItem'
import { deleteUser } from '../action'

const $ = window.$ //to use jquery in the react

const UserDisplay = ({ userInfo }) => {
  const renderTableRow = userInfo.map((user, index) => {
    return <UserItem user={user} key={index} />
  })

  const tableSortJquery = useRef() //creating generic container

  useEffect(() => {
    // $('table').tablesort() //implement sorting function once
    tableSortJquery.current = $('table.sortable').tablesort().data('tablesort')
    //custom compare function
    tableSortJquery.current.settings.compare = (a, b) =>
      a.localeCompare(b, 'en', { numeric: true })

    console.log(tableSortJquery) //list container values
  }, [])

  useEffect(() => {
    //to re-sort everytime with new data
    tableSortJquery.current.sort($('th.default-sort'), 'asc')
  }, [userInfo])

  return (
    <div>
      <table className="ui sortable celled table">
        <thead>
          <tr>
            <th className="sorted ascending default-sort">Name</th>
            <th className="">Age</th>
            <th className="no-sort">Actions</th>
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
