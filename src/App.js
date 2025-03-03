
import './App.css';
import ListUsers from './components/ListUsers';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/ListUsers' element={<ListUsers/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
