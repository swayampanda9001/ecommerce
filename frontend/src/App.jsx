import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getMyCourses = async () => {
    const response = await fetch(`http://localhost:3000/my-course`);
    const courses = await response.json();
    console.log(courses);
  };

  return (
    <div className="">
      <button className="border" onClick={getMyCourses}>Get My Courses</button>
    </div>
  );
}

export default App;
