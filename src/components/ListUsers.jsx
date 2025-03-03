import { useState,useEffect } from "react";
import axios from "axios";

const ListUsers = () => {

    const [users,setUsers]=useState([]);
    useEffect(()=>
    {
        fetchData()
        .then((res) => {
            setUsers(res.data);
          
          })
          .catch((err) => {
             
            setUsers();
            });

    },[])
    return ( <>
    
    </> );

    function fetchData()
    {
        return  axios.post("https://localhost:7101/api/User")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
}
 
export default ListUsers;