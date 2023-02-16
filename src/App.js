//* Packages import
//? React Router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//? Axios import
import axios from "axios";

//? Cookies import
import Cookies from "js-cookie";

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

  const [favCharacters, setFavCharacters] = useState(
    Cookies.get("favCharacters") || ""
  );

  const handleCookies = (cookieName, favId) => {
    if (Cookies.get(cookieName)) {
      const tempCookie = Cookies.get(cookieName);
      tempCookie = tempCookie + "," + favId;
      Cookies.set(cookieName, tempCookie, { expires: 5 });
    } else {
      Cookies.set(cookieName, favId, { expires: 5 });
    }
  };

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
        <Route
          path="/character/:id"
          element={
            <Character
              favCharacters={favCharacters}
              setFavCharacters={setFavCharacters}
              handleCookies={handleCookies}
            />
          }
        />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
