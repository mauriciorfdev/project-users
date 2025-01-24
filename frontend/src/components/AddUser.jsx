import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
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
    } catch (error) {
      console.error(error.message)
    }
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (<>
    <Container>
      <h2>Add New User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Enter name'></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Enter email'
          ></Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </Container>
  </>)
}

export default AddUser