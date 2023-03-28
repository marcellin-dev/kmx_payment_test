import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const Dashboard = () => {

    const router = useNavigate()
    useEffect(()=>{
        console.log("dashboard")
        let identifier = localStorage.getItem("identifier")
       if(!identifier) router("/pay")
    })
    return (
        <div>

        </div>
    );
};

export default Dashboard;