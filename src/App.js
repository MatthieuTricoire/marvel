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
import Character from "./Pages/Character";
import Comics from "./Pages/Comics";

//* Components import
import Header from "./Components/Header";

function App() {
  //? States declarations
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:4000/characters", {
          searchCharacter: searchCharacter,
        });
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [searchCharacter]);

  // console.log(data);
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              isLoading={isLoading}
              searchCharacter={searchCharacter}
              setSearchCharacter={setSearchCharacter}
            />
          }
        />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
