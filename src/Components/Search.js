//? Style import
import "./Search.css";

//? Image import
import thorHammer from "../assets/img/thor_Hammer_ligth.svg";

const SearchandPagination = ({
  data,
  searchValue,
  setSearchValue,
  nbItems,
  setNbItems,
  nbItemsInit,
  pageNb,
  setPageNb,
}) => {
  return (
    <>
      <section className="container row search ">
        <div className="search__bar">
          <input
            type="text"
            name="searchCharacter"
            id="searchCharacter"
            placeholder="Which one is the best ?! "
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
          <img className="search__icon" src={thorHammer} alt="" />

          <select
            className="search__bar__select"
            name="limit"
            id="limit"
            value={nbItems}
            onChange={(e) => setNbItems(e.target.value)}
          >
            {nbItemsInit.map((value, idx) => {
              return (
                <option key={idx} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <div className="pagination row container">
        <div
          onClick={() => {
            setPageNb(pageNb - 1);
          }}
          className={pageNb === 1 ? `disable` : ``}
        >
          Previous page
        </div>
        <div
          onClick={() => {
            setPageNb(pageNb + 1);
          }}
          className={
            pageNb === Math.ceil(data.count / data.limit) ? `disable` : ``
          }
        >
          Next page
        </div>
      </div>
    </>
  );
};

export default SearchandPagination;
