
import './App.css';
import ListUsers from './components/ListUsers';
import Register from './components/Register';
import Navbar from './components/Navbar';
import LoginPage from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  

  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <LoginPage/>
   <Routes>
    <Route path='/ListUsers' element={<ListUsers/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
