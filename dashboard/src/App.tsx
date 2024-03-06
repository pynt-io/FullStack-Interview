import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </main>
  );
}

export default App;
