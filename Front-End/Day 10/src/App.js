import Login from './Pages/Login';
import SignUp from './Pages/Sign-up';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from '../src/Pages/DashBoard/Dashboard'
import Home from './Home'
import Adlogin from './Pages/Adlogin'

import AdSignUp from './Pages/AdSignUp';
import Footer from './Footer';
import TermsAndConditions from './TermsandConditions';
import Faq from './faq';
import Policy from './Policy'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/adlogin" element={<Adlogin/>} />
            <Route path="/adSignUp" element={<AdSignUp/>} />
            <Route path="/footer" element={<Footer/>} />
            <Route path="/Tc" element={<TermsAndConditions/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/pri" element={<Policy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
