import "./InventorySection.css";

const inventorySection = () => {
  return (
    <section id="inventory" className="py-2">
      <div className="container inventory-inner">
        <div className="text-center py-3">
          <h1 className="title-dark">Our inventory</h1>
        </div>

        <p className="lead text-center">
          We offer huge variety of vehicles which you can enjoy
        </p>

        <div className="boxes py-3">
          <div className="box">
            <div className="vehicle">
              <img src="img/svg/car.svg" alt="" />
            </div>
            <div className="description">
              <h1>Cars</h1>
              <p className="">
                From fuel efficient commuters to high powered sports cars and
                luxury sedans, we can help you find the perfect car for your
                situation.
              </p>
              <a href="/" className="btn-apply-dark">
                Apply now
              </a>
            </div>
          </div>

          <div className="box">
            <div className="vehicle">
              <img src="img/svg/minivan.svg" alt="" />
            </div>
            <div className="description">
              <h1>Minivans</h1>
              <p className="">
                With seating for up to 7 and plenty of room for whatever you may
                need to transport, a minivan makes the perfect family vehicle.
              </p>
              <a href="/" className="btn-apply-dark">
                Apply now
              </a>
            </div>
          </div>

          <div className="box">
            <div className="vehicle">
              <img src="img/svg/truck.svg" alt="" />
            </div>
            <div className="description">
              <h1>Trucks</h1>
              <p className="">
                Need to haul a trailer, just like helping your friends move? Our
                dealers carry a wide variety of midsize and full-size trucks
                from various manufacturers.
              </p>
              <a href="/" className="btn-apply-dark">
                Apply now
              </a>
            </div>
          </div>

          <div className="box">
            <div className="vehicle">
              <img src="img/svg/suv.svg" alt="" />
            </div>
            <div className="description">
              <h1>SUVs</h1>
              <p className="">
                Looking for something suitable for city driving, but still want
                that off-road capability? Let us help you get into the perfect
                SUV. Compact to full-size, we have it!
              </p>
              <a href="/" className="btn-apply-dark">
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default inventorySection;
