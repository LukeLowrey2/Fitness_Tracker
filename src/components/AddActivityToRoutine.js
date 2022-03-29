import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ActivitiesDropdown from './ActivitiesDropdown';


const AddActivityToRoutine = () => {

    const [activity, setActivity] = useState([])
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const locallySourcedToken = localStorage.getItem('token');

        const response = await fetch(`${BASE_URL}/activities`, {
            method: 'POST',
            body: JSON.stringify({
                
                    activityId: activity.id,
                    count: count,
                    duration: duration,
                
            })
        }
        )
        const data = await response.json();
        console.log('This is the added activity:', data)
    }

    return(
        <div>
            {/* <form action="/action_page.php">
            
                Add Activity: <select name="activities" id="activities">
                <option value="abc" selected="selected">activities</option>
                </select>
                <br></br>
                
                

                <input type="text" placeholder="Count" value={count} onChange={(event) => setCount(event.target.value)}></input>
                <input type="text" placeholder="Duration" value={duration} onChange={(event) => setDuration(event.target.value)}></input>
                
                </form > */}
            <ActivitiesDropdown />
                
        </div>
    )    

}

export default AddActivityToRoutine;