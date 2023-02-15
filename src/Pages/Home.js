const Home = ({ data, isLoading }) => {
  return isLoading ? (
    <p>En chargement</p>
  ) : (
    <section>
      {data.results.map((character) => {
        return (
          <div className="character column">
            <div className="character__title">{character.name}</div>
            <img
              className="character__thumbnail"
              src={
                character.thumbnail.path +
                "/portrait_medium." +
                character.thumbnail.extension
              }
              alt=""
            />
            <div className="character__description">
              {character.description}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Home;
