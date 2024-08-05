import ParticlesDiv from "./Particles";
import "./App.css";
import Login from "./Login/Login";
import StudentNavbar from "./StudentDatas/StudentNavbar";
import { Route, Routes } from "react-router-dom";
import StudentDatas from "./StudentDatas/StudentDatas";
import StudentDetails from "./StudentDatas/StudentDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="app">
        <ToastContainer />

        {login ? (
          <div className="logOnly">
            <ParticlesDiv id="particlesStyl" />
            <Login setLogin={setLogin} />
          </div>
        ) : (
          <div>
            <div className="studnetDiv">
              <StudentNavbar />
              <Routes>
                <Route path="/" element={<StudentDatas />} />
                <Route path="/details" element={<StudentDetails />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
