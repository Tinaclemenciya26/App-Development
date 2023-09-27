import Login from './Pages/Login';
import SignUp from './Pages/Sign-up';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from '../src/Pages/DashBoard/Dashboard'
import Home from './Home'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
