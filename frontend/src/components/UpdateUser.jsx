import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const UpdateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
  })
  const {id} = useParams()
  const navigate = useNavigate()

  function handleChange(e){
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }

async function handleSumbit(e){
  e.preventDefault();
  const resp = await fetch(`http://localhost:5000/api/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  const data = await resp.json()
  console.log(data)
  navigate('/')
}


  return (<>
    <h2>UpdateUser</h2>
    <Form onSubmit={handleSumbit}>
      <Form.Group className='mb-3' controlId='formUpdName'>
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter new name'
        ></Form.Control>
      </Form.Group>

      <Button type='submit'>Update!</Button>
    </Form>
  </>)
}

export default UpdateUser