import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const UpdateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect( () => {
    const getUser = async () => {
      try {
        const resp = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await resp.json();
        console.log(data);
        setFormData(data);
      } catch (error) {
        console.error('error while fetching users: ', error.message)
      }
    };
    getUser();
  }, [] )

  function handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

async function handleSumbit(e){
  e.preventDefault();
  try {
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
  } catch (error) {
    console.error(error.message)
  }
}


  return (<>
    <h2>UpdateUser</h2>
    <Form onSubmit={handleSumbit}>
      <Form.Group className='mb-3' controlId='formUpdName'>
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type='text'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Enter new name'
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Enter new email'
        ></Form.Control>
      </Form.Group>

      <Button type='submit'>Update!</Button>
    </Form>
  </>)
}

export default UpdateUser