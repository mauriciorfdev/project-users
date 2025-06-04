import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const getUsers = async () => {
    try {
      setIsDataLoading(true);
      const resp = await fetch(`${API_BASE_URL}/api/users`);
      const data = await resp.json();
      setUsers(data);
      setIsDataLoading(false);
    } catch (error) {
      console.error('error while fetching users: ', error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  function handleUpdate(userId) {
    navigate(`/user/${userId}`);
  }

  async function handleDelete(userId) {
    try {
      const resp = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
        method: 'DELETE',
      });
      getUsers();
    } catch (error) {
      console.error('Error while deleting users: ', error.message);
    }
  }

  return (
    <>
      <Container className='mt-4'>
        <h2>Users List</h2>

        {isDataLoading && <Spinner />}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    className='mt-1'
                    variant='dark'
                    onClick={() => handleUpdate(user._id)}
                  >
                    Update
                  </Button>{' '}
                  <Button
                    className='mt-1'
                    variant='danger'
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default UsersList;
