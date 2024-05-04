import React, { useState, useEffect } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { API_URL } from './constants/URL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Update = () => {
  const [id, setId] = useState('');
  const [TodoName, setTodoName] = useState('');
  const [Description, setDescription] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const updateuser = async () =>{
    await axios.put(API_URL + id,{
        TodoName,
        Description,
        checked


    })
    navigate('/rename');
  }
  useEffect(() => {
    setId(localStorage.getItem('id'));
    setTodoName(localStorage.getItem('TodoName'));
    setDescription(localStorage.getItem('Description'));
    setChecked(localStorage.getItem('checked') === 'true');
  }, []);

  return (
    <Form className='form'>
      <Form.Field>
        <label> Todo Name </label>
        <input
          value={TodoName}
          onChange={(event) => setTodoName(event.target.value)}
          placeholder='Todo Name'
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label> Description </label>
        <input
          value={Description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder=' Description'
        />
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          label='Agree the terms & condition'
        />
      </Form.Field>
      <br />
      <Button onClick={{updateuser}}>Update todo</Button>
    </Form>
  );
};
