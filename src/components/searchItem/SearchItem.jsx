import { Link } from "react-router-dom";
import "./searchItem.css";

function SearchItem({ item }) {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free Services</span>
        <span className="siSubtitle">Luxury Furnitures and Essentials </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          Get Exciting offers and discounts today
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Inclusive All Taxes</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Check Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
