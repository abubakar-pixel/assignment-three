import "./Header.css";
import HeroCar from "../../images/hero-car.svg";

const header = () => {
  return (
    <header id="hero">
      <div className="container hero-inner">
        {/* leading text */}
        <div className="heading animated fadeIn">
          <h1>Start driving your credit.</h1>
          <p className="lead py-1">
            No Appointments, no obligation and free to apply. Are you looking
            for a new car?
          </p>
          <a href="/" className="btn-apply-light">
            Get a car now
          </a>
        </div>

        {/* banner image */}
        <div className="car animated fadeIn">
          <img src={HeroCar} alt="car" />
        </div>
      </div>
    </header>
  );
};

export default header;
