import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./Component/theme";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import HomePage from "./Pages/index";
import Login from "./Pages/login";
import OutputCareer from "./Pages/outputCareer";
import PredictStudent from "./Pages/predictStudent";
import RecommendSubject from "./Pages/recommendSubject";
import DataUpload from "./Pages/dataUpload";
import DataEdit from "./Pages/dataEdit";
import GenModel from "./Pages/genModel";
import ModelList from "./Pages/modelList";
import CareerUpdate from "./Pages/updateStudentCareer";
import Student from "./Pages/student";
import ProtectedRoute from "./Pages/protectedRoute";


function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/outputCareer" element={<OutputCareer />} />
          <Route path="/predictStudent" element={<PredictStudent />} />
          <Route path="/recommendSubject" element={<RecommendSubject />} />
          <Route path="/dataUpload" element={<ProtectedRoute><DataUpload /></ProtectedRoute>} />
          <Route path="/dataEdit/:id" element={<DataEdit />} />
          <Route path="/genModel" element={<GenModel />} />
          <Route path="/temp" element={<ModelList />} />
          <Route path="/careerUpdate" element={<CareerUpdate />} />
          <Route path="/Student" element={<Student />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
