import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import IngredientSubmitter from "./components/IngredientSubmitter";
import Dialog from "./components/Dialog";
import NotFoundPage from "./components/NotFoundPage";



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe-by-name" element={<Dialog />} />
        <Route path="/recipe-by-ingredients" element={<IngredientSubmitter />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
      
  );
}
