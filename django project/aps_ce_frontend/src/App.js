import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataUpload from "./Pages/dataUpload";
import DataEdit from "./Pages/dataEdit";
import GenModel from "./Pages/genModel";
import ModelList from "./Pages/modelList";
import CareerUpdate from "./Pages/updateStudentCareer";
import OutputCareer from "./Pages/Career";
import PredictStudent from "./Pages/predictStudent";
import HomePage from "./Pages/index";
import Login from "./Pages/login";
import RecommendSubject from "./Pages/recommendSubject";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";
import { theme } from "./Component/theme";
import { ThemeProvider } from "@mui/material/styles";
import Upload from "./Pages/Upload"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/outputCareer" element={<OutputCareer />} />
          <Route path="/predictStudent" element={<PredictStudent />} />
          <Route path="/recommendSubject" element={<RecommendSubject />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dataEdit/:id" element={<DataEdit />} />
          <Route path="/dataUpload" element={<DataUpload />} />
          <Route path="/genModel" element={<GenModel />} />
          <Route path="/temp" element={<ModelList />} />
          <Route path="/careerUpdate" element={<CareerUpdate />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
