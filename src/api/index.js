const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';

export const getAllActivities = async () => {

    const response = await fetch(`${BASE_URL}/activities`);
    const data = await response.json();
    return data

}

export const getAllRoutines = async () => {

    const response = await fetch(`${BASE_URL}/routines`);
    const data = await response.json();
    return data

}

