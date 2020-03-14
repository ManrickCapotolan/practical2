import React from 'react'

export default (props) => {
  const { optionsList = [], name, value, placeholder, onChange } = props;

  return(
    <select name={name} className='ui fluid dropdown' value={value} id={name} onChange={onChange}>
      { placeholder && <option value='' disabled>{placeholder}</option> }
      {
        optionsList.map(option =>
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )
      }
    </select>
  )
};
