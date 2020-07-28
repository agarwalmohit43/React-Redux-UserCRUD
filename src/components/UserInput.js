import React, { useState, useEffect } from 'react'

const UserInput = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log('Name', name)
    console.log('age', age)
  }

  return (
    <div className="ui segment" style={{ width: '300px' }}>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>YouTube Search</label>
          <input
            type="text"
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default UserInput
