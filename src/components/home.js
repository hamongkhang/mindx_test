import { useState, useEffect } from "react";
const Home = () => {
  const [meal, setMeal] = useState({});
  const randomFood = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(function (response) {
        response.json().then((data) => {
          setMeal(data.meals[0]);
        });
      })
      .catch(function (error) {
        console.log("Looks like there was a problem: \n", error);
      });
    console.log(meal);
  };
  useEffect(() => {}, [meal]);
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              <button
                style={{ marginBottom: "100px" }}
                className="btn btn-primary py-2 px-4"
                onClick={() => randomFood()}
              >
                Random
              </button>
            </h5>
          </div>
          {meal.strMeal ? (
            <div
              className="tab-class text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4" style={{ marginBottom: "30px" }}>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src={meal.strMealThumb}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src={meal.strMealThumb}
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{meal.strMeal}</span>
                            <span className="text-primary">
                              {meal.strCategory}
                            </span>
                          </h5>
                          <small className="fst-italic">
                            {meal.strInstructions}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-10">
                      <div className="d-flex align-items-center">
                        <center>
                        <iframe
                          width="640"
                          height="360"
                          src={"https://www.youtube.com/embed/"+meal.strYoutube.slice(-11)}
                          title="YouTube video player"
                          frameborder="0"
                          allowfullscreen
                        ></iframe>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
