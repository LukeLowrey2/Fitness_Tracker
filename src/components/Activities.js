import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import NewActivityForm from './NewActivityForm';


const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api'; 

const locallySourcedToken = localStorage.getItem("token"); 

const Activities = (props) => {

    // const { activities } = props

    const [activities, setActivities] = useState([]);
    const getAllActivities = async () => {

    const response = await fetch(`${BASE_URL}/activities`);
    const data = await response.json();
    setActivities(data);

    
    }
    useEffect( () => {
        getAllActivities()
    }, [])

    console.log('these are the activities', activities)

    // const [activities, setActivities] = useState([]);

    // useEffect(async () => {
    //     const theActivities = await getAllActivities();
    //     console.log('These are the activities:', theActivities);
    //     setActivities(theActivities)
    // })

    let singleActivities = null
    let newActivitiesForm = null

    if( activities && activities.length){
        singleActivities = <div >
            {
                activities.map((activity) =>
                <div className="content-cards" key={activity.id}>
                    <h4>{activity.name}</h4>
                    <p>{activity.description}</p>
                    
                </div>
                )
            }
        </div>
    }

    if(locallySourcedToken){
        newActivitiesForm = <div>
            <NewActivityForm />
        </div>
    }

    return(
        <div>
            <h2>Activities</h2>
            <div>
                {newActivitiesForm}
            </div>
            
            <div>
                {singleActivities}
            </div>
            
               
            
            

        </div>
    )
}

export default Activities;