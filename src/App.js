//* Packages import
//? React Router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//? Axios import
import axios from "axios";

//? Main style import
import "./App.css";

//* React packages import
import { useState, useEffect } from "react";

//* Pages import
import Home from "./Pages/Home";

//* Components import
import Header from "./Components/Header";

function App() {
  //? States declarations
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Characters");
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} isLoading={isLoading} />} />
      </Routes>
    </Router>
  );
}

export default App;
