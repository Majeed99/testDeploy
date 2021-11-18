import "./App.css";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import Programs from "./Pages/Programs";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Profile from "./Pages/Profile";
import DashBoard from "./Pages/DashBoard";
import Admin from "./Pages/Admin/Admin";
import Exercises from "./Pages/Exercises";
import AddNewProgram from "./Pages/Admin/AddNewProgram";
import EditProgram from "./Pages/Admin/EditProgram";
import PageNotFoundPage from "./Pages/PageNotFoundPage";
import NoAccessPage from "./Pages/NoAccessPage";
function App() {
  const token = localStorage.getItem("Token");
  return (
    <div className="bg-gray-800  min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/programs" element={<Programs />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          {}
          <Route path="/NoAccessPage" element={<NoAccessPage />} />
          {}
          <Route path="/Admin" element={<Admin />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/exercises/:id" element={<Exercises />} />
          <Route path="/AddNewProgram" element={<AddNewProgram />} />
          <Route path="/EditProgram/:id" element={<EditProgram />} />
          NoAccessPage
          <Route path="/*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
