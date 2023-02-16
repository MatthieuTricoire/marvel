import "./CharacterCard.css";

//? React router import
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const cutString = (nbWord, str) => {
    return str.split(" ").splice(0, nbWord).join(" ");
  };

  return (
    <div
      className="character-card column"
      onClick={() => navigate(`character/${character._id}`)}
    >
      <div className="character-card__title row">{character.name}</div>
      <div className="character-card__thumbnail">
        <img
          className="character-card__thumbnail__img"
          src={
            character.thumbnail.path +
            "/portrait_medium." +
            character.thumbnail.extension
          }
          alt=""
        />
      </div>
      <div className="character-card__description">
        {character.description
          ? cutString(10, character.description) + "..."
          : "Désolé mais pour toi ils ont eu la flemme"}
      </div>
    </div>
  );
};

export default CharacterCard;
