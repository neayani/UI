import { useState } from "react";
import { useEffect } from "react";
//import Register from './Register';
import { useNavigate } from "react-router-dom";

import axios from "axios";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/Register");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://localhost:7101/api/User"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();

        setUsers(data); // Set the users data in state
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleInputChange = (e, id, field) => {
    const updatedData = users.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setUsers(updatedData);
  };

  const handleCheckedChange=(e,userId)=>{
    const {name,checked}=e.target;
  //  console.log(e.target);
  //  console.log(checked);
    setUsers(prevUser=>prevUser.map(user=>user.id===userId?{...user,[name]:checked}:user));
  }
  const handleUpdate = async (id) => {
 
    const userToUpdate = users.find((user) => user.id === id);
   
    try {
      await axios.put("https://localhost:7101/api/User", userToUpdate);

      const updated=[...users];
      const index =updated.indexOf(userToUpdate);
      updated[index]={...userToUpdate};
      setUsers(updated);
    //  console.log(users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
   
     const userSelected= users.find((user) => user.id === id);
   
     try {
      await axios.delete("https://localhost:7101/api/User", {data:{id:userSelected.id}});
      const updated=[...users];
      const index =updated.indexOf(userSelected);
      updated.splice(index,1);
      setUsers(updated);
    //  console.log(users);
     } catch (error) {
       console.error(error);
     }
   };
 
  if (!loading) {
    return (
      <div className="container mt-4">
        <button className="btn btn-success" onClick={handleCreateClick}>
          Create User
        </button>

        <h1>User List</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>LastName</th>
              <th>UserName</th>
              <th>Email</th>
              <th>IsActive</th>
              <th>isAdmin</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                {/* <td>{user.id}</td> */}
                <td>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => handleInputChange(e, user.id, "name")}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    value={user.lastName}
                    onChange={(e) => handleInputChange(e, user.id, "lastName")}
                  ></input>
                </td>

                <td>
                  <input
                    type="text"
                    value={user.userName}
                    onChange={(e) => handleInputChange(e, user.id, "userName")}
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    value={user.email}
                    onChange={(e) => handleInputChange(e, user.id, "email")}
                  ></input>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={user.isActive}
                    onChange={(e) => handleCheckedChange(e, user.id)}
                  ></input>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="isAdmin"
                    checked={user.isAdmin}
                    
                    onChange={(e) => handleCheckedChange(e, user.id)}
                  ></input>
                </td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={()=>handleUpdate(user.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={()=>handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};


export default ListUsers;
