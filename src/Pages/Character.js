//* Axios import
import axios from "axios";

//* React packages import
import { useState, useEffect } from "react";

//* React router packages import
import { useParams } from "react-router-dom";

//* React multi carousel import
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//* Style import
import "./Character.css";

const Character = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [dataCharacter, setDataCharacter] = useState();
  const [covers, setCovers] = useState();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  //? get the data of this character
  useEffect(() => {
    const fetchdata = async () => {
      try {
        //   console.log("id reçu en params : " + params.id);
        const response = await axios.get(
          `http://localhost:4000/characterId/${params.id}`
        );
        // console.log("réponse reçue" + response);
        setDataCharacter(response.data);
        // console.log("info du personnage :" + dataCharacter.name);

        //? get comics cover
        const responseCover = await axios.get(
          `http://localhost:4000/comics/character/${params.id}`
        );
        setCovers(responseCover.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdata();
  }, []);

  return isLoading ? (
    <p>loading</p>
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
        </div>
      </div>
      <div className="character__cover row">
        <Carousel
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
          {covers.comics.map((comic) => {
            return (
              <img
                className="cover"
                src={
                  comic.thumbnail.path +
                  "/portrait_incredible." +
                  comic.thumbnail.extension
                }
                alt=""
              />
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
export default Character;
