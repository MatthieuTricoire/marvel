//? Style import
import "./ComicCard.css";

//? Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//? React import

const ComicCard = ({ comic, handleFavorites, favCom, setFavCom }) => {
  return (
    <div className="comic-card column container">
      <div className="comic-card__thumbnail">
        <img
          src={
            comic.thumbnail.path +
            "/portrait_uncanny." +
            comic.thumbnail.extension
          }
          alt="Bande-dessinée"
          className="comic-card__thumbnail__img"
        />
      </div>
      <div className="comic-card__caption row">
        <div className="comic-card__title row">{comic.title}</div>
        <div className="comic-card__fav">
          {favCom.includes(comic._id) ? (
            <FontAwesomeIcon
              className="fav-minus"
              icon="heart-circle-minus"
              onClick={() => {
                handleFavorites(favCom, setFavCom, comic, "favComIds");
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="fav-plus"
              icon="heart-circle-plus"
              onClick={() => {
                handleFavorites(favCom, setFavCom, comic, "favComIds");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
