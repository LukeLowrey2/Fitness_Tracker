import React, {useState, useEffect} from 'react';




const ActivitiesDropdown = () =>{

    // const [activities, setActivities] = useState([]);
    // const getAllActivities = async () => {

    // const response = await fetch(`${BASE_URL}/activities`);
    // const data = await response.json();
    // setActivities(data);
    // }

    // useEffect( () => {
    //     getAllActivities()
    // }, [])

    const [ toggleDropdown, setToggleDropdown] = useState(false);

    const toggleDropdownMenu = () => {

        if (!toggleDropdown) {
            setToggleDropdown(true);
        } 
        else{
            setToggleDropdown(false);
        }

    }

    const singleActivities = null

    if( toggleDropdown ){
        singleActivities = <div>
            {
                activities.map((activity) =>
                <button className="dropdown-button" key={activity.id}>
                    <p>{activity.name}</p>   
                </button>
                )
            }
        </div>
    }

    return(
        <div>
            <button onClick={toggleDropdownMenu}>Add Activity</button>
            {
                singleActivities
            }
        </div>
    )

};

export default ActivitiesDropdown;