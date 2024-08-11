import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
