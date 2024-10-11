import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Kandy,Sigiriya,Galle"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="featured">
      { loading ? (
        "Loading please wait"
      ) : (
      //Array.isArray(data) && data.length === 3 && (
        <>
          <div className="featuredItem">
            <img
              src="https://thumbs.dreamstime.com/b/temple-tooth-relic-lord-buddha-kandy-sri-lanka-sanctuary-263945726.jpg"
              alt="Berlin"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kandy</h1>
              <h2>{data[0]?.count || 0} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/R.dade39779e7549015f83af8f8782e6e8?rik=IHFleItx%2by2chw&riu=http%3a%2f%2fwww.pearlceylon.com%2fimages%2fdestination%2fsigiriya%2fsigiriya-by-air.jpg&ehk=qBvBwGXJvH%2fks4lehtxalJjDvmSDg8BAUkxTRWpI%2bWo%3d&risl=&pid=ImgRaw&r=0"
              alt="Madrid"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sigiriya</h1>
              <h2>{data[1]?.count || 0} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://d3e1m60ptf1oym.cloudfront.net/c6660c47-c004-4332-a988-a6c1cbbd1ca3/JW_012219_6377_uxga.jpg"
              alt="London"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Galle</h1>
              <h2>{data[2]?.count || 0} properties</h2>
            </div>
          </div>

          

        </>
      )}
    </div>
  );
};

export default Featured;





