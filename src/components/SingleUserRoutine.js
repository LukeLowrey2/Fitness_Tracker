import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';

const locallySourcedToken = localStorage.getItem("token");

const SingleUserRoutine = (props) => {
    console.log("Single user routine props", props)
    const { userRoutine } = props
    console.log('this is user routine', userRoutine)

    const [toggle, setToggle] = useState(false);


    const deleteRoutine = async () => {
        console.log("detele Routine Props", userRoutine);
        
        try {

            const response = await fetch(`${BASE_URL}/routines/${userRoutine.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })


            const data = await response.json();

            console.log('This is the deletePost function', data);

        } catch (err) {
            console.log(err);
        }
    }

    const updateRoutine = async (id) => {
        try {


            const locallySourcedToken = localStorage.getItem("token");

            const response = await fetch(`${BASE_URL}/api/routines/${id}`, {
                method: "PATCH",
                    body: JSON.stringify({
                    name: routineName,
                    goal: routineGoal
                })
            });

            const data = await response.json();

            console.log('This is updated routine data', data);

            setRoutineName('');
            setRoutineGoal('');
            toggleMessage(false);
            getUserRoutines();
        } catch (err) {
            console.log(err)
        }}


        return (
            <div className="content-cards" key={userRoutine.id}>
            <h2>{userRoutine.name}</h2>
            <p>Goal: {userRoutine.goal}</p>
            <button className='delete-button' onClick={deleteRoutine}>Delete Post</button>
            {/* <button className='message-button' onClick={toggleUpdate}>Update</button> */}
            <div>
                {toggle ?
                    <form onSubmit={updateHandleSubmit}>
                        <textarea type="text" placeholder="Name" id="title-input" onChange={(event) => setRoutineName(event.target.value)}></textarea>
                        <textarea type="text" placeholder="Goal" id="title-input" onChange={(event) => setRoutineGoal(event.target.value)}></textarea>
                        <br></br>
                        <button className='update-button'  onClick={updateRoutine(userRoutine.id)}>Update Routine</button>
                    </form>
                    :
                    ''
                }
            </div>
            <div>
                {
                    userRoutine.activities.map((activity) =>
                        <div key={activity.id}>
                            <h4>Activity: {activity.name}</h4>
                            <p>{activity.description}</p>
                            <p>Duration: {activity.duration} | Count: {activity.count}</p>
                            {/* add routine button */}
                        </div>

                    )
                }
            </div>


        </div>
        )

}

export default SingleUserRoutine