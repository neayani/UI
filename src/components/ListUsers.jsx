import { useState } from "react";
import { useEffect } from "react";
//import axios from "axios";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

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

  // useEffect(() => {
  //   console.log('Updated users state:', users); // This will log the updated state after it's set

  // }, [users]); // Add 'users' as a dependency so it runs whenever 'users' changes

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!loading) {
    return (
      <div className="container mt-4">
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
                 <input type ="text" value={user.name}></input>
                </td>
                <td>
                  <input type="text" value={user.lastName}></input>
                </td>

                <td> <input type="text" value={user.userName}></input></td>
                <td> <input type="text" value={user.email}></input></td>
                <td>
                  <input
                    type="checkbox"
                    readOnly
                    checked={user.isActive}
                  ></input>
                </td>
                <td>
                  <input
                    type="checkbox"
                    readOnly
                    checked={user.isAdmin}
                  ></input>
                </td>
                <td>
                <button className="btn btn-info btn-sm" >
                                        Update
                                    </button>
                </td>
                <td>
                <button className="btn btn-warning btn-sm" >
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
