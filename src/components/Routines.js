import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api'; 

const Routines = (props) => {

    // const { routines } = props

    const [routines, setRoutines] = useState([]);
    const getAllRoutines = async () => {

    const response = await fetch(`${BASE_URL}/routines`);
    const data = await response.json();
    setRoutines(data);
    }

    useEffect( () => {
        getAllRoutines()
    }, [])

    console.log('these are the routines', routines)

    let singleRoutines = null

    if( routines && routines.length){
        singleRoutines = <div>
            {
                routines.map((routine) =>
                <div className="content-cards" key={routine.id}>
                    <h2>{routine.name}</h2>
                    <p>Creator: {routine.creatorName}</p>
                    <p>Goal: {routine.goal}</p>
                    <div>
                        {
                            routine.activities.map((activity) =>
                            <div key={activity.id}>
                                <h4>Activity: {activity.name}</h4>
                                <p>{activity.description}</p>
                                <p>Duration: {activity.duration} | Count: {activity.count}</p>
                            </div>
                            )
                        }
                    </div>
                    
                    
                </div>
                )
            }
        </div>
    }

    return(
        <div>
            <h2>Routines</h2>
            <div>
                {singleRoutines}
            </div>
            
               
            
            

        </div>
    )
}

export default Routines;