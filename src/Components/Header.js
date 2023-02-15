//? Images import
import logo from "../assets/img/Marvel_Logo.svg";

//? Style import
import "./Header.css";

const Header = () => {
  return (
    <header className="header column">
      <img src={logo} alt="" className="header__logo" />
      <nav className="row header__nav">
        <div className="nav__item">
          <img src="" alt="" />
          <span>Characters</span>
        </div>
        <div className="nav__item">
          <img src="" alt="" />
          <span>Comics</span>
        </div>
        <div className="nav__item">
          <img src="" alt="" />
          <span>Favorites</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
