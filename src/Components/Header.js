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
        <Link
          to="/"
          className="nav__item
         hover"
        >
          <span>Characters</span>
        </Link>
        <Link to="/comics" className="nav__item hover">
          <span>Comics</span>
        </Link>
        <Link to="/favorites" className="nav__item hover">
          <span>Favorites</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
