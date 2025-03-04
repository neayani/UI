
import './App.css';
import ListUsers from './components/ListUsers';
import Register from './components/Register';
import Navbar from './components/Navbar';
import LoginPage from './components/Login';
import { useState , useEffect} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if the user is already logged in (e.g., from local storage)
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
}, []);

const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status);
};
  return (
   <>
    <BrowserRouter>
            {isLoggedIn && <Navbar />}
            <Routes>
                <Route 
                    path="/" 
                    element={isLoggedIn ? <EmptyPage /> : <LoginPage onLogin={handleLogin} />} 
                />
                <Route path="/ListUsers" element={<ListUsers />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
   </>
  );
}
const EmptyPage = () => (
  <div className="center-container">
      <h2>Home Page</h2>
      <p>This page is intentionally left blank.</p>
  </div>
);

export default App;
