import "./AboutSection.css";
import aboutImg from "../../images/about-us.svg";

const aboutSection = () => {
  return (
    <section id="about" className="py-2">
      <div className="container about-inner">
        <div className="centered py-3">
          <h1 className="title-dark">About us</h1>
        </div>

        <div className="about-grid">
          <p className="about-left lead">
            Founded in 2019 by Micheal, Approval1 has come a long way from its
            beginnings in California. When our team first started out, their
            passion for cars drove them to quit day job so that Approval1 can
            offer you the world's most best service. We now serve customers all
            over country, and are thrilled that we're able to turn our passion
            into our own website.
          </p>
          <img src={aboutImg} alt="About us" className="py-1" />
        </div>
      </div>
    </section>
  );
};

export default aboutSection;
