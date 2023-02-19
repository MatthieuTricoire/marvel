//* Packages import
//? React Router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//? Main style import
import "./App.css";

//* React packages import
import { useState, useEffect } from "react";

//* Pages import
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Character from "./Pages/Character";
import Comics from "./Pages/Comics";

//* Components import
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Favorite from "./Pages/Favorite";

//? FontAwesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeartCirclePlus,
  faHeartCircleMinus,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHeartCirclePlus, faHeartCircleCheck, faHeartCircleMinus);

function App() {
  //? States declarations
  const nbItemsInit = [25, 50, 75, 100];
  const [nbItems, setNbItems] = useState(nbItemsInit[1]);

  const [favChar, setFavChar] = useState([]);

  const [favCom, setFavCom] = useState([]);

  useEffect(() => {
    const loadFavChars = JSON.parse(localStorage.getItem("favCharIds") || "0");
    const loadFavComs = JSON.parse(localStorage.getItem("favComIds") || "0");
    if (loadFavChars !== 0) {
      setFavChar([...loadFavChars]);
    }
    if (loadFavComs !== 0) {
      setFavCom([...loadFavComs]);
    }
  }, []);

  const handleFavorites = (state, setState, data, storageName) => {
    let copyState = state;
    let addToFav = true;
    copyState.map((item, idx) => {
      if (item === data._id) {
        copyState.splice(idx, 1);
        addToFav = false;
      } else {
        return null;
      }
    });
    if (addToFav) {
      copyState.push(data._id);
    }
    setState([...copyState]);
    localStorage.setItem(storageName, JSON.stringify(state));

    let storage = localStorage.getItem(data._id || "0");

    if (storage === null) {
      localStorage.setItem(data._id, JSON.stringify(data));
    } else {
      localStorage.removeItem(data._id);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters
              nbItems={nbItems}
              nbItemsInit={nbItemsInit}
              setNbItems={setNbItems}
            />
          }
        ></Route>
        <Route
          path="/character/:id"
          element={
            <Character
              favChar={favChar}
              setFavChar={setFavChar}
              handleFavorites={handleFavorites}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              favCom={favCom}
              setFavCom={setFavCom}
              handleFavorites={handleFavorites}
            />
          }
        />
        <Route path="/loading" element={<Loading />} />
        <Route
          path="/favorite"
          element={
            <Favorite
              favChar={favChar}
              setFavChar={setFavChar}
              handleFavorites={handleFavorites}
              favCom={favCom}
              setFavCom={setFavCom}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
