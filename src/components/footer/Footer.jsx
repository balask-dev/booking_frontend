import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="fLists" style={{ color: "white" }}>
        <ul className="fList">
          <li className="fListItem">Districts</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Countries</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Homes </li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
          <li className="fListItem">Villas</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem"> Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Seasonal deals </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
