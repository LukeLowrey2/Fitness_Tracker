import React, { useState, useEffect } from 'react';

const Logout = () => {
    
    return (
        <div>
            <button onClick={() => {localStorage.removeItem("token"); }}>
                Logout
            </button>
        </div>
    )

}

export default Logout;