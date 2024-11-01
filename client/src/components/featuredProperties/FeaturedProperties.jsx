import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL; 
  const { data, loading, error } = useFetch("https://booking-app-b5mx.onrender.com/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;



