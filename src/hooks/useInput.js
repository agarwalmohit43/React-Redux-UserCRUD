import { useState } from 'react'

function UseInput(initialValue = null, patternValue = '', placeholder = '') {
  const [value, setValue] = useState(initialValue)

  const bind = {
    onChange: (e) => {
      setValue(e.target.value)
    },
    pattern: patternValue,
    placeholder,
    title: placeholder,
  }

  return [value, setValue, bind]
}

export default UseInput
