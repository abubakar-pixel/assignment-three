import "./Navigation.css";

const navigation = () => {
  return (
    <nav id="navbar">
      <div className="container navbar-inner">
        {/* logo */}
        <div className="logo">
          <a href="#hero"> APPROVAL1 </a>
        </div>

        {/* navigation links */}
        <ul className="links">
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#inventory">Inventory</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
          <li>
            <a href="/" className="btn-apply-dark">
              Apply now
            </a>
          </li>
        </ul>

        {/* menu icon  */}
        <div className="hamburger" onclick="showMenu()">
          <i data-feather="menu"></i>
        </div>
      </div>
    </nav>
  );
};

export default navigation;
