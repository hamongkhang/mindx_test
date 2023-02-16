const Header = () => {
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                Food Random
                <i className="fa fa-utensils me-3" />
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0 pe-4">
                <a href="#" className="nav-item nav-link active">
                  Home
                </a>
                <a href="#" className="nav-item nav-link">
                  About
                </a>
                <a href="#" className="nav-item nav-link">
                  Service
                </a>
              </div>
              <a
                href="#"
                style={{ marginRight: "10px" }}
                className="btn btn-primary py-2 px-4"
              >
                login
              </a>
              <a href="#" className="btn btn-primary py-2 px-4">
                Register
              </a>
            </div>
          </nav>
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 text-white animated slideInLeft">
                    Enjoy Our
                    <br />
                    Delicious Meal
                  </h1>
                  <p className="text-white animated slideInLeft mb-4 pb-2">
                    These warm and personalized services turn every meal into a
                    happy experience.Taking customer experience as our top
                    priority, we always provide innovative and pleasant services
                    to our customers. All the personalized "Together hi, Food
                    Random together"
                  </p>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img
                    className="img-fluid"
                    src="./asset/picture/hero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
};

export default Header;
