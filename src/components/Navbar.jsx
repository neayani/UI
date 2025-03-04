import { NavLink } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const decodeJwt = (token) => {
    const base64Url = token.split(".")[1]; // Get the payload part
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Adjust base64 encoding
    const decodedData = atob(base64); // Decode base64 string

    return JSON.parse(decodedData); // Parse JSON to get object
  };

  let userRole;
  const token = localStorage.getItem("token"); // Get token from localStorage

  if (token) {
    const decoded = decodeJwt(token);
    userRole = decoded.role; // Example of extracting role from decoded payload
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {userRole === "Admin" && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/ListUsers"
                  >
                    ListOfUsers
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <button onClick={onLogout} className="btn btn-danger">
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
