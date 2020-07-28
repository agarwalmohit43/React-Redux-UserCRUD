import React, { useState, useEffect } from 'react'

const UserInput = () => {

    const

  const onFormSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>YouTube Search</label>
          <input
            type="text"
            placeholder={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default UserInput
