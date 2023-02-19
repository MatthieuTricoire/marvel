//* React packages import
import { useState, useEffect } from "react";

//? Axios import
import axios from "axios";
import ComicCard from "../Components/ComicCard";

//? Style import
import "../Pages/Comics.css";

//? Components import
import SearchandPagination from "../Components/Search";
import Loading from "../Components/Loading";

const Comics = ({ favCom, setFavCom, handleFavorites }) => {
  //? States declarations
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const nbItemsInit = [25, 50, 75, 100];
  const [nbItems, setNbItems] = useState(nbItemsInit[1]);

  const [searchComic, setSearchComic] = useState("");
  const [pageNbComics, setPageNbComics] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?title=${searchComic}&skip=${
            (pageNbComics - 1) * nbItems
          }&limit=${nbItems}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [searchComic, pageNbComics, nbItems]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <SearchandPagination
        data={data}
        searchValue={searchComic}
        setSearchValue={setSearchComic}
        nbItems={nbItems}
        setNbItems={setNbItems}
        nbItemsInit={nbItemsInit}
        pageNb={pageNbComics}
        setPageNb={setPageNbComics}
      />
      <section className="container row comics">
        {data.results.map((comic) => {
          return (
            <ComicCard
              handleFavorites={handleFavorites}
              favCom={favCom}
              setFavCom={setFavCom}
              comic={comic}
              key={comic._id}
            />
          );
        })}
      </section>
    </>
  );
};

export default Comics;
