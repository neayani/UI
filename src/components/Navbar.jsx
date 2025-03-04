import { NavLink } from "react-router-dom";

const Navbar = ({ onLogout }) => {
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
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/ListUsers"
                >
                  ListOfUsers
                </NavLink>
              </li>
            </ul>
          </div>
          <button onClick={onLogout} className="btn btn-danger">Log Off</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
