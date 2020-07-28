import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../action'

const UserInput = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const onFormSubmit = (event) => {
    event.preventDefault()
    props.createUser(name, age)
  }

  return (
    <div className="ui segment" style={{ width: '350px' }}>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>User Input</label>
          <input
            type="text"
            placeholder={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder={age}
            required
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <button type="Submit" className="ui primary button">
          Submit
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.userData }
}

export default connect(mapStateToProps, { createUser })(UserInput)
