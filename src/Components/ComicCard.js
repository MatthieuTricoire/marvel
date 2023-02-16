import "./ComicCard.css";

const ComicCard = ({ comic }) => {
  return (
    <div className="comic-card column">
      <div className="comic-card__thumbnail">
        <img
          src={
            comic.thumbnail.path +
            "/portrait_medium." +
            comic.thumbnail.extension
          }
          alt=""
        />
      </div>
      <div className="comic-card__title">{comic.title}</div>
    </div>
  );
};

export default ComicCard;
