import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
  })
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/users', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    console.log(data)
    navigate('/')
  }

  function handleChange(e){
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }

  return (<>
    <h2>AddUser</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Name: </Form.Label>
        <Form.Control 
          type='name' 
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter name'></Form.Control>
      </Form.Group>
      
      <Button variant='primary' type='submit'>Submit</Button>
    </Form>
  </>)
}

export default AddUser