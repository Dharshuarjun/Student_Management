import "./App.css";
import studentList from "./data";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import AllStudent from "./AllStudent";
import AddStudent from "./AddStudent";
import StudentDetails from "./StudentDetails";
import EditStudent from "./EditStudent";

function App() {
  const [student, setStudent] = useState(studentList);
  return (
    <Router>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="content">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard student={student} />} />
        <Route path="/allstudent" exact element={<AllStudent student={student} setStudent={setStudent} />} />
        <Route path="/allstudent/:index" element={<StudentDetails student={student} />} />
        <Route path="/edit/:index" element={<EditStudent student={student} setStudent={setStudent} />} />
        <Route path="/addstudent" exact element={<AddStudent student={student} setStudent={setStudent} />} />
        <Route element={<Home />} />
      </Routes>
    </Box>
  </Router>
  );
}

export default App;
