//* Axios import
import axios from "axios";

//* React packages import
import { useState, useEffect } from "react";

//* React router packages import
import { useParams } from "react-router-dom";

//? Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//* Style import
import "./Character.css";
import Loading from "../Components/Loading";

const Character = ({ handleFavorites, setFavChar, favChar }) => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [dataCharacter, setDataCharacter] = useState();
  const [covers, setCovers] = useState();

  //? get the data of this character
  useEffect(() => {
    const fetchdata = async () => {
      try {
        //   console.log("id reçu en params : " + params.id);
        const response = await axios.get(
          `site--marvel-backend--vmph8rxlwjhj.code.run/characterId/${params.id}`
        );
        // console.log("réponse reçue" + response);
        setDataCharacter(response.data);
        // console.log("info du personnage :" + dataCharacter.name);

        //? get comics cover
        const responseCover = await axios.get(
          `site--marvel-backend--vmph8rxlwjhj.code.run/comics/character/${params.id}`
        );
        setCovers(responseCover.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdata();
  }, [params.id]);

  return isLoading ? (
    <Loading />
  ) : (
    <section className="container">
      <div className="character row">
        <img
          className="col character__img"
          src={
            dataCharacter.thumbnail.path +
            "/portrait_uncanny." +
            dataCharacter.thumbnail.extension
          }
          alt=""
        />
        <div className="col character__details">
          <div className="character__name">{dataCharacter.name}</div>
          <div className="character__information">
            {dataCharacter.description ? (
              dataCharacter.description
            ) : (
              <p>
                Si vous pouvez lire ces lignes, c'est qu'il y a apparamment pas
                grand chose à dire sur moi. Déso
              </p>
            )}
          </div>
          <div className="character__fav">
            {favChar.includes(dataCharacter._id) ? (
              <FontAwesomeIcon
                className="fav-minus"
                icon="heart-circle-minus"
                onClick={() => {
                  handleFavorites(
                    favChar,
                    setFavChar,
                    dataCharacter,
                    "favCharIds"
                  );
                }}
              />
            ) : (
              <FontAwesomeIcon
                className="fav-plus"
                icon="heart-circle-plus"
                onClick={() => {
                  handleFavorites(
                    favChar,
                    setFavChar,
                    dataCharacter,
                    "favCharIds"
                  );
                }}
              />
            )}

            {/* )} */}
          </div>
        </div>
      </div>
      <div className="character__cover column">
        <div className="character__cover__title">
          <h2>You can find me in : </h2>
        </div>
        <div className="character__cover__thumbnail row">
          {covers.comics.map((comic) => {
            return (
              <img
                key={comic._id}
                className="cover"
                src={
                  comic.thumbnail.path +
                  "/portrait_large." +
                  comic.thumbnail.extension
                }
                alt=""
              />
            );
          })}
        </div>
        {/* <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
         
        </Carousel> */}
      </div>
    </section>
  );
};
export default Character;
