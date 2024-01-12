import React, { useState } from 'react'
import axios from 'axios' // this is for making api calls

function Create() {

  const [ task , setTask ] = useState()
  const handleInsert = () => {
    axios.post('http://localhost:3001/insert', { task: task }) 
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))

  }
  return (
    <div className='create-form'>
        <input type='text' placeholder='Enter Task' onChange={ 
          (e) => setTask(e.target.value)} /> 
        <button type='button' onClick={ handleInsert }>Insert</button>
    </div>
  )
}

export default Create