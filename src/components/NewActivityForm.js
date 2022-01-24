import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';

const NewActivityForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const locallySourcedToken = localStorage.getItem('token');

        const response = await fetch(`${BASE_URL}/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${locallySourcedToken}`
              },
            body: JSON.stringify({
             
                    name: name,
                    description: description,
                
            })
        }
        )
        const data = await response.json();
        console.log('This is the new activity:', data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>New Activity Form</h3>

                <input type="text" placeholder="Title" value={name} onChange={(event) => setName(event.target.value)}></input>
                <br></br>
                <textarea type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <br></br>
                <button type="submit">Create New Activity</button>
            </form>
        </div>
    )

}

export default NewActivityForm;