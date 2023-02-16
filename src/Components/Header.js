//? Images import
import logo from "../assets/img/Marvel_Logo.svg";

//? React router import
import { useNavigate, Link } from "react-router-dom";

//? Style import
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header column">
      <Link to="/">
        <img src={logo} alt="" className="header__logo" />
      </Link>
      <nav className="row header__nav ">
        <div
          className="nav__item
        hover"
        >
          <span>Characters</span>
        </div>
        <div className="nav__item hover">
          <span>Comics</span>
        </div>
        <div className="nav__item hover">
          <span>Favorites</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
