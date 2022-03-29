import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddActivityToRoutine from './AddActivityToRoutine';
import ActivitiesDropdown from './ActivitiesDropdown.js';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';

const locallySourcedToken = localStorage.getItem('token');

const NewRoutineForm = () => {

    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false) 
    

    const handleSubmit = async (event) => {
        event.preventDefault();


        const response = await fetch(`${BASE_URL}/routines`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${locallySourcedToken}`
              },
            body: JSON.stringify({
                
                    name: name,
                    goal: goal,
                    isPublic: isPublic
                
            })
        }
        )
        const data = await response.json();
        console.log('This is the new activity:', data)
        setName('')
        setGoal('')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>New Routine Form</h3>

                <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}></input>
                <br></br>
                <textarea type="text" placeholder="Goal" value={goal} onChange={(event) => setGoal(event.target.value)}></textarea>
                <br></br>
                

                <div>
                    <p>Is Public</p>
                    <input type="radio" id="isPublicTrue" name="true" value={true} onChange={(event) => { 
                        console.log('isPublic input', event.target.value)
                        setIsPublic(event.target.value)
                        }} ></input> <label htmlFor="isPublicTrue">True</label>

                    <input type="radio" id="isPublicFalse" name="false" value={false} onChange={(event) => { 
                        console.log('isPublic input', event.target.value)
                        setIsPublic(event.target.value)
                        }}></input> <label htmlFor="isPublicFalse">False</label>
                </div>
                <div>
                {/* {
                    <AddActivityToRoutine />
                } */}
                </div>
                {/* <div>
                {
                    <ActivitiesDropdown />
                }
                </div> */}

                <button type="submit">Create New Routine</button>
            </form>
        </div>
    )

}

export default NewRoutineForm;