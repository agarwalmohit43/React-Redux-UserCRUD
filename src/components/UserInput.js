import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { createUser, selectedUser, updateUser } from '../action'

const placeHolderName = 'Accepts alphabets only'
const placeHolderAge = 'Accepts age from 1 to 99, 0 as default : 25'

const UserInput = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [formState, setFormState] = useState(!Boolean(props.selectedUser))

  useEffect(() => {
    if (props.selectedUser) {
      setFormState(false)
      setName(props.selectedUser.name)
      setAge(props.selectedUser.age)
    } else {
      setFormState(true)
    }
  }, [props.selectedUser])

  const refUserName = useRef()
  const refUserAge = useRef()

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (formState) {
      if (name) props.createUser(name, age)
    } else {
      if (name) props.updateUser(props.selectedUser.name, name, age)
      props.updateSelectedUser(null)
      setFormState(true)
    }
    clearTextFieldValues()
  }

  const clearTextFieldValues = (event) => {
    setName('')
    setAge(25)
    refUserName.current.value = ''
    refUserAge.current.value = ''
  }

  function updateFormCancel() {
    setName('')
    setAge(25)
    refUserName.current.value = ''
    refUserAge.current.value = ''
    props.updateSelectedUser(null)
    setFormState(true)
  }

  function createForm() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>User Input</label>
            <input
              type="text"
              placeholder={placeHolderName}
              ref={refUserName}
              pattern="\w"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder={placeHolderAge}
              ref={refUserAge}
              pattern="\d{1,2}"
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

  function updateForm() {
    refUserName.current.value = name
    refUserAge.current.value = age
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>User Input</label>
            <input
              type="text"
              placeholder={placeHolderName}
              ref={refUserName}
              pattern="\w"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              ref={refUserAge}
              placeholder={placeHolderAge}
              pattern="\d{1,2}"
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>
          <div className="ui buttons">
            <button className="ui button" onClick={updateFormCancel}>
              Cancel
            </button>
            <div className="or"></div>
            <button type="Submit" className="ui positive button active">
              Update
            </button>
          </div>
        </form>
      </div>
    )
  }

  return <div>{formState ? createForm() : updateForm()}</div>
}

const mapStateToProps = (state) => {
  return { selectedUser: state.selectedUser, userData: state.userData }
}

export default connect(mapStateToProps, {
  createUser,
  updateUser,
  updateSelectedUser: selectedUser,
})(UserInput)
