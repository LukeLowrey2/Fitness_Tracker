import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NewRoutineForm from './NewRoutineFrom'
import SingleUserRoutine from './SingleUserRoutine';


const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';

const locallySourcedToken = localStorage.getItem("token");

const UserRoutines = (props) => {

    // const { userRoutines } = props
    const [userRoutines, setUserRoutines] = useState([]);
    // const [toggle, setToggle] = useState(false);
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');

    const getUserRoutines = async () => {
        const locallySourcedToken = localStorage.getItem('token');
        console.log('this is the getUsersRoutines function')
        const userResponse = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${locallySourcedToken}`
            },
        });
        const userData = await userResponse.json();
        console.log('this is userData', userData)

        const response = await fetch(`${BASE_URL}/users/${userData.username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
              },
        });
        const data = await response.json();
        setUserRoutines(data);
    }

    useEffect(() => {
        getUserRoutines()
    }, [])

    console.log('these are the routines', userRoutines)

    // const deleteRoutine = async (props) => {
    //     console.log("detele Routine Props", props);
    //     const { userRoutine } = props;
    //     try {

    //         const response = await fetch(`${BASE_URL}/posts/${userRoutine.id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${localStorage.getItem("token")}`
    //             }
    //         })

    //         const data = await response.json();

    //         console.log('This is the deletePost function', data);

    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // const updateRoutine = async (id) => {
    //     try {


    //         const locallySourcedToken = localStorage.getItem("token");

    //         const response = await fetch(`${BASE_URL}/api/routines/${id}`, {
    //             method: "PATCH",
    //                 body: JSON.stringify({
    //                 name: routineName,
    //                 goal: routineGoal
    //             })
    //         });

    //         const data = await response.json();

    //         console.log('This is updated routine data', data);

    //         setRoutineName('');
    //         setRoutineGoal('');
    //         toggleMessage(false);
    //         getUserRoutines();
    //     } catch (err) {
    //         console.log(err)
    //     }}



        let singleRoutines = null
        let newRoutineForm = null

        if (userRoutines && userRoutines.length >= 1) {
            singleRoutines = <div>
                {
                    userRoutines.map((userRoutine) =>
                    <SingleUserRoutine key={userRoutine.id} userRoutine={userRoutine} />

                        // <div className="content-cards" key={userRoutine.id}>
                        //     <h2>{userRoutine.name}</h2>
                        //     <p>Goal: {userRoutine.goal}</p>
                        //     <button className='delete-button' onClick={deleteRoutine}>Delete Post</button>
                        //     {/* <button className='message-button' onClick={toggleUpdate}>Update</button> */}
                        //     <div>
                        //         {toggle ?
                        //             <form onSubmit={updateHandleSubmit}>
                        //                 <textarea type="text" placeholder="Name" id="title-input" onChange={(event) => setRoutineName(event.target.value)}></textarea>
                        //                 <textarea type="text" placeholder="Goal" id="title-input" onChange={(event) => setRoutineGoal(event.target.value)}></textarea>
                        //                 <br></br>
                        //                 <button className='update-button'  onClick={updateRoutine(userRoutine.id)}>Update Routine</button>
                        //             </form>
                        //             :
                        //             ''
                        //         }
                        //     </div>
                        //     <div>
                        //         {
                        //             userRoutine.activities.map((activity) =>
                        //                 <div key={activity.id}>
                        //                     <h4>Activity: {activity.name}</h4>
                        //                     <p>{activity.description}</p>
                        //                     <p>Duration: {activity.duration} | Count: {activity.count}</p>
                        //                     {/* add routine button */}
                        //                 </div>

                        //             )
                        //         }
                        //     </div>


                        // </div>
                    )
                }
            </div>
        } else if (userRoutines.length < 1) {
            singleRoutines = <div>
                {
                    <p>No routines yet</p>
                }
            </div>
        }

        if (locallySourcedToken) {
            newRoutineForm = <div>
                <NewRoutineForm />
            </div>
        }

        const toggleUpdate = () => {

            if (!toggle) {
                setToggle(true);
            }
            else {
                setToggle(false);
            }

        }
        return (
            <div>
                <div>
                    {newRoutineForm}
                </div>
                <h2>Routines</h2>


                <div>
                    {singleRoutines}
                </div>





            </div>
        )
    }

    export default UserRoutines;