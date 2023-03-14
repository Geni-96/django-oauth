import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

export const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){
            window.location.href = '/login'  
        }
        else{
            (async () => {
            try {
                const {data} = await axios.get('http://127.0.0.1:8000/home/', {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
              });

              setMessage(data.message);
            } catch (e) {
                console.log('not auth')
            }
        })()};
    }, []);



    return <div className="form-signin mt-5 text-center">
        <h3>Hi {message}</h3>
        
    </div>
}