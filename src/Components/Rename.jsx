import React, { useState, useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { API_URL } from '../constants/URL';
import { Update } from './../Update';
import { useNavigate } from 'react-router-dom';

export const Rename = () => {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();
  
  const UpdateUser = ({TodoName,Description,checked,id}) => {
    localStorage.setItem('id',id)
    localStorage.setItem('TodoName',TodoName)
    localStorage.setItem('Description',Description)
    localStorage.setItem('checked',checked)
    navigate('/update')
    
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(API_URL + id);
      callGetAPI(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error appropriately, such as showing a message to the user
    }
  };

  const callGetAPI = async () => {
    try {
      const response = await axios.get(API_URL);
      setAPIData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error appropriately, such as showing a message to the user
    }
  };

  useEffect(() => {
    callGetAPI(); // Fetch initial data when component mounts
  }, []);

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>TodoName</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {apiData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.TodoName}</Table.Cell>
            <Table.Cell>{data.Description}</Table.Cell>
            <Table.Cell>{data.checked ? 'checked' : 'Not checked'}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => deleteUser(data.id)}>Delete</Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => UpdateUser(data.id)}>Update</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
