//? Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//? Style import
import "./Favorite.css";

const Favorites = ({
  favCom,
  setFavCom,
  favChar,
  setFavChar,
  handleFavorites,
}) => {
  let favChars = [{}];
  let favComics = [{}];

  const favCharsArray = JSON.parse(localStorage.getItem("favCharIds") || "0");
  for (let i = 0; i < favCharsArray.length; i++) {
    let x = favCharsArray[i];
    favChars[i] = JSON.parse(localStorage.getItem([x]) || "");
  }

  const favComicsArray = JSON.parse(localStorage.getItem("favComIds") || "0");
  for (let j = 0; j < favComicsArray.length; j++) {
    let y = favComicsArray[j];
    favComics[j] = JSON.parse(localStorage.getItem([y]) || "");
  }

  return (
    <div className="container">
      {favChars[0]._id !== undefined && (
        <h2 className="favorite__title">My favorite heroes</h2>
      )}
      <div className="favorite-section row">
        {favChars[0]._id !== undefined &&
          favChars.map((character) => {
            return (
              <div className="favItem column" key={character._id}>
                <div className="favName">{character.name}</div>
                <FontAwesomeIcon
                  className="fav-minus"
                  icon="heart-circle-minus"
                  onClick={() => {
                    handleFavorites(
                      favChar,
                      setFavChar,
                      character,
                      "favCharIds"
                    );
                  }}
                />
                <img
                  className="favImg"
                  src={
                    character.thumbnail.path +
                    "/standard_xlarge." +
                    character.thumbnail.extension
                  }
                  alt=""
                />
              </div>
            );
          })}
      </div>

      {favComics[0]._id !== undefined && (
        <h2 className="favorite__title">My favorite comics</h2>
      )}
      <div className="favorite-section row">
        {favComics[0]._id !== undefined &&
          favComics.map((comic) => {
            return (
              <div className="favItem column" key={comic._id}>
                <div className="favName">{comic.title}</div>
                <FontAwesomeIcon
                  className="fav-minus"
                  icon="heart-circle-minus"
                  onClick={() => {
                    handleFavorites(favCom, setFavCom, comic, "favComIds");
                  }}
                />
                <img
                  className="favImg"
                  src={
                    comic.thumbnail.path +
                    "/standard_xlarge." +
                    comic.thumbnail.extension
                  }
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favorites;
