import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../action'

const UserInput = (props) => {
  const [name, setName] = useState(props.selectedUser.name)
  const [age, setAge] = useState(props.selectedUser.age)

  const refUserName = useRef()
  const refUserAge = useRef()

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (name) props.createUser(name, age)
    clearTextFieldValues()
  }

  const clearTextFieldValues = (event) => {
    setName('')
    setAge('')
    refUserName.current.value = ''
    refUserAge.current.value = ''
  }
  return (
    <div className="ui segment" style={{ width: '350px' }}>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>User Input</label>
          <input
            type="text"
            placeholder="Default Name: Demo"
            ref={refUserName}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Default Age 25"
            ref={refUserAge}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div className="ui buttons">
          <button className="ui button" onClick={clearTextFieldValues}>
            Cancel
          </button>
          <div className="or"></div>
          <button type="Submit" className="ui positive button active">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { selectedUser: state.selectedUser, userData: state.userData }
}

export default connect(mapStateToProps, { createUser })(UserInput)
