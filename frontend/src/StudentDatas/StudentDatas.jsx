import React, { useState } from "react";
import "./StudentDatas.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentDatas = () => {
  const [studentDatas, setStudentDatas] = useState({
    name: "",
    date: "",
    fee: "",
    sem: "1semester",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setStudentDatas((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmitStudent = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:2001/students/addStudents",
      studentDatas
    );

    if (response.data.sta) {
      toast.success(response.data.message);
      setStudentDatas({
        name: "",
        date: "",
        fee: "",
        sem: "1semester",
      });
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="student_container">
      <div className="student_form">
        <form onSubmit={handleSubmitStudent}>
          <div className="student_heading">
            <h3>student Fee entry</h3>
          </div>
          <div className="student_inputs">
            <div>
              <label>Student name</label>
              <input
                type="text"
                name="name"
                placeholder="student Name"
                value={studentDatas.name}
                onChange={handleInputs}
                required
              />
            </div>
            <div>
              <label>date</label>
              <input
                type="date"
                name="date"
                placeholder="date"
                required
                value={studentDatas.date}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label>fee</label>
              <input
                type="number"
                name="fee"
                placeholder="enter the fee"
                required
                value={studentDatas.fee}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label>fee type</label>
              <select
                name="sem"
                onChange={handleInputs}
                value={studentDatas.sem}
                required
              >
                <option value="1semester">1 semester</option>
                <option value="2semester">2 semester</option>
                <option value="3semester">3 semester</option>
              </select>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default StudentDatas;
