//? Axios import
import axios from "axios";

//* React packages import
import { useState, useEffect } from "react";

//? Components import
import Loading from "../Components/Loading";
import CharacterCard from "../Components/CharacterCard";
import SearchandPagination from "../Components/Search";

//? Style import
import "./Characters.css";

const Characters = ({ nbItems, nbItemsInit, setNbItems }) => {
  //? States declarations
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [searchCharacter, setSearchCharacter] = useState("");
  const [pageNb, setPageNb] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `site--marvel-backend--vmph8rxlwjhj.code.run/characters?name=${searchCharacter}&skip=${
            (pageNb - 1) * nbItems
          }&limit=${nbItems}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [searchCharacter, nbItems, pageNb]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <SearchandPagination
        data={data}
        searchValue={searchCharacter}
        setSearchValue={setSearchCharacter}
        nbItems={nbItems}
        setNbItems={setNbItems}
        nbItemsInit={nbItemsInit}
        pageNb={pageNb}
        setPageNb={setPageNb}
      />

      <section className="column container">
        <div className="characters container row">
          {data.results.map((character) => {
            if (
              character.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ||
              character.thumbnail.extension === "gif"
            ) {
              return null;
            } else {
              return (
                <CharacterCard character={character} key={character._id} />
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default Characters;
