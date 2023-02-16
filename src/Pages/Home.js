//? Components import
import CharacterCard from "../Components/CharacterCard";

//? Style import
import "./Home.css";

//? Image import
import thorHammer from "../assets/img/thor_Hammer_ligth.svg";

const Home = ({ data, isLoading, searchCharacter, setSearchCharacter }) => {
  return isLoading ? (
    <p>En chargement</p>
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
              setSearchCharacter(e.target.value);
            }}
            value={searchCharacter}
          />
          <img className="search__icon" src={thorHammer} alt="" />
        </div>
      </section>
      <section className="row characters container">
        {data.results.map((character) => {
          return <CharacterCard character={character} key={character._id} />;
        })}
      </section>
    </>
  );
};

export default Home;
