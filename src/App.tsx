import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import CourseRegistration from "./pages/CourseRegistration/CourseRegistration";

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <BrowserRouter >
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/> 
          <Route path="/courses" element={<Courses  />}/> 
          <Route path="/about" element={<About  />}/> 
          <Route path="/contact" element={<Contact  />}/> 
          <Route path="/login" element={<Login  />}/> 
          <Route path="/register/course/:id" element={<CourseRegistration />} />
        </Route>

    </Routes>
    </BrowserRouter>
    
      );
}

export default App
