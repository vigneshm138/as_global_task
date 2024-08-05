import React, { useEffect, useState } from "react";
import "./StudentDetails.css";
import axios from "axios";

const StudentDetails = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const [searchVal, setSearchVal] = useState();
  const [studentDe, setStudentDe] = useState([]);
  useEffect(() => {
    const response = async () => {
      await axios
        .get("http://localhost:2001/students/getStudents")
        .then((res) => {
          setStudentDetails(res.data.datas);
          setStudentDe(res.data.datas);
        });
    };
    response();
  }, []);

  const handlesd = (e) => {
    e.preventDefault();
    const splitDatas = searchVal.split(",");

    const filterDatas = studentDetails.filter((item) => {
      return splitDatas.some(
        (item1) =>
          item1 === item.name ||
          item1 == item.fee ||
          item1 === item.date ||
          item1 === item.sem
      );
    });

    console.log(filterDatas);

    if (filterDatas.length > 0) {
      setStudentDe(filterDatas);
      console.log(studentDe);
    } else {
      setStudentDe(studentDetails);
      console.log(studentDe);
    }
  };

  const handleLoad = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="studentDetails">
      <div className="student_filter">
        <div>
          <form onSubmit={handlesd}>
            <label>Filter all</label>
            <div className="note">
              *2024-01-23 ( please give like this YY-MM-DD)
            </div>
            <div>
              <input
                type="text"
                name=""
                placeholder="ex: name,fee,etc"
                value={searchVal}
                onChange={handleLoad}
              />
              <button type="submit">search</button>
            </div>
          </form>
        </div>
      </div>
      <dir>
        <table>
          <thead>
            <tr>
              <td>student name</td>
              <td>Date</td>
              <td>fee</td>
              <td>Fee type</td>
            </tr>
          </thead>
          <tbody>
            {studentDe.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.fee}</td>
                <td>{item.sem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </dir>
    </div>
  );
};

export default StudentDetails;
