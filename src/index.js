import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Route, Link, Switch } from 'react-router-dom';



const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api'; 

const app = document.getElementById('app');




ReactDOM.render (
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);




// const App = () => {

    

//     console.log('Hello from Fitness Tracker');

//     const [activities, setActivities] = useState([]);

//     const getAllActivities = async () => {

//         const response = await fetch(`${BASE_URL}/activities`);
//         const data = await response.json();
//         setActivities(data);
//         // return data
    
//     }

//     useEffect( () => {
//         getAllActivities()
//         // const theActivities = await getAllActivities();
//         // console.log('These are the activities:', theActivities);
//         // setActivities(theActivities)

//     }, [])

//     return(
//         <div>
//             <div>
//                 <h1>This is Fitness Tracker</h1>
//             </div>
//             <div>
//                 <Activities activities={activities} />
//             </div>
            
//         </div>
    
//     )
// }

// ReactDOM.render(<App />, app);