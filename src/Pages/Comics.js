//* React packages import
import { useState, useEffect } from "react";

//? Image import
import thorHammer from "../assets/img/thor_Hammer_ligth.svg";

//? Axios import
import axios from "axios";
import ComicCard from "../Components/ComicCard";

const Comics = () => {
  //? States declarations

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchComic, setSearchComic] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:4000/comics", {
          searchComic: searchComic,
        });
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [searchComic]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <>
      <section className="container row search">
        <div className="search__bar">
          <input
            type="text"
            name="searchCharacter"
            id="searchCharacter"
            placeholder="Which one is the best ?! "
            onChange={(e) => {
              setSearchComic(e.target.value);
            }}
            value={searchComic}
          />
          <img className="search__icon" src={thorHammer} alt="" />
        </div>
      </section>
      <section className="container row comics">
        {data.results.map((comic) => {
          return <ComicCard comic={comic} key={comic._id} />;
        })}
      </section>
    </>
  );
};

export default Comics;
