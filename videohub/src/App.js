import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Uploads";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/videos" element={<Videos/>}/>
    <Route path="/upload"  element={<Upload/>}/>
    <Route path="/SignUp"  element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </Router>
    
  );
}

export default App;

