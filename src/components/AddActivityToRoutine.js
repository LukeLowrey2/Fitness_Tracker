import React, { useState } from 'react';
import ReactDOM from 'react-dom';


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
            <form action="/action_page.php">
            
                Subjects: <select name="subject" id="subject">
                <option value="abc" selected="selected">Select subject</option>
                </select>
                <br></br>
                {/* <fieldset>
                    <label htmlFor="select-activity"> <span>({activityList.length})</span></label>
                        <select
                            name="activity"
                            id="select-activity"
                            value={activity}
                            onChange={(event) => setActivity(event.target.value)}>
                            <option value="any">Any</option>
                        {
                            activityList.map((activity, idx) => {
                                return <option key = {idx} value = {activity.name}>
                                            {activity.name} 
                                        </option>
                            })
                        }
                        </select>
                </fieldset> */}

                <input type="text" placeholder="Count" value={count} onChange={(event) => setCount(event.target.value)}></input>
                <input type="text" placeholder="Duration" value={duration} onChange={(event) => setDuration(event.target.value)}></input>
                
                </form >
        </div>
    )    

}

export default AddActivityToRoutine;