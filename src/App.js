import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from  './component/Home';
import Employee from  './component/Employee';
import About from './component/About';
import Contact from './component/Contact';
import Create from './component/AddEmployee';
import EditEmployee from './component/EditEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/employee' element={<Employee/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/editEmployee' element={<EditEmployee/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
