import useFetch from "../../hooks/useFetch";
import "./featured.css";

function Featured() {
  const { data, loading, error } = useFetch(
    "http://localhost:4000/api/hotels/countByCity?cities=germany,dubai,australia"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i2.wp.com/thelifestylehunter.com/wp-content/uploads/2019/02/Hamburg-Germany-Europe-8975.jpg?fit=1000%2C750&ssl=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Germany</h1>
              <h2>{data[0]} Luxury categories</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://assets-news.housing.com/news/wp-content/uploads/2022/06/23203204/12-must-visit-places-in-Dubai-and-top-things-to-do-13.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dubai</h1>
              <h2>{data[1]} Luxury categories</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://static01.nyt.com/images/2022/02/16/travel/travel-australia/merlin_202283673_370aabe2-6eac-4cd4-972c-f999284e8152-videoSixteenByNineJumbo1600.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Australia</h1>
              <h2>{data[2]} Luxury categories</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://img.huffingtonpost.com/asset/5e28762d2400009003c97230.jpeg?cache=KkGtb8KTfj&ops=scalefit_720_noupscale"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[1]} Luxury categories</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
