import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {Form, Button, Checkbox} from'semantic-ui-react'
import { API_URL } from '../constants/URL';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
       const [TodoName, setTodoName] = useState('');
       const [Description, setDescription] = useState('');
       const [checked, setChecked] = useState(false);
       const navigate = useNavigate();

       const postData = async () => {
           await axios .post(API_URL,{
              TodoName,
              Description,
              checked

           })
           navigate('/rename');

       }


  return (
    <Form className='form'>
        <Form.Field>
          <label> Todo Name </label>
          <input value={TodoName} 
          onChange={event => setTodoName(event.target.value)}
           placeholder='Todo Name' />
        </Form.Field>
        <br />
        <Form.Field>
          <label> Description </label>
          <input value={Description} 
          onChange={event => setDescription(event.target.value)}
           placeholder=' Description' />
        </Form.Field><br/>
        <Form.Field>
          <Checkbox checked={checked}
          onChange={()  => setChecked(!checked)}
          label="Agree the terms & condition" />
        </Form.Field><br/>
        <Button onClick= {postData}>Add todo</Button>
    </Form>
    
  )
}

export default Create
