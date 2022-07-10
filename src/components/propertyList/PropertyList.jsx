import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:4000/api/hotels/countByType"
  );

  const images = [
    "http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg",
    "https://m.lemontreehotels.com/getattachment/a991b8ea-7ff7-45c4-9c3a-4c0476cef534/Business-Rooms.aspx",
    "https://www.thepostoakhotel.com/img/resort/875x600/1.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000",
    "https://media.timeout.com/images/105166815/750/562/image.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
