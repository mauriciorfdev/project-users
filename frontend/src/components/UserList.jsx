import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const UserList = () => {

  const [users, setUsers] = useState([])

  useEffect( () => {
    const getUsers = async () => {
      try {
        const resp = await fetch('http://localhost:5000/api/users');
        const data = await resp.json();
        console.log(data)
        setUsers(data);
      } catch (error) {
        console.error('error while fetching users: ', error.message)
      }
    };
    getUsers();
  }, [] )

  return (<>
    <h2>Users List</h2>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>  
      <tbody>
        {users.map(user => 
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>mail@email.com</td>
            <td>
              <Button variant='dark'>Update</Button>{' '}
              <Button variant='danger'>Delete</Button>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </>)
}

export default UserList