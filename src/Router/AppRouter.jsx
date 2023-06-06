import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../Stickeria/Pages/HomePage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />

        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
