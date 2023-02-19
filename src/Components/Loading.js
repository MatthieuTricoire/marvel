//? Import Images
import loading_img from "../assets/img/flash_loading.png";

//? Import CSS
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading column">
      <h1 className="loading__title">Loading ...</h1>
      <img className="loading__img" src={loading_img} alt="Super Héro Flash" />
    </div>
  );
};
export default Loading;
