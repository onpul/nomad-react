import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Content from "../components/Content";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const contentArr = ["comics", "series", "stories"];
  const getDetail = () => {
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`,
    )
      .then((data) => data.json())
      .then((json) => {
        // setDetail(json);
        setDetail(json.data.results[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);
  console.log(detail);
  // console.log(detail.comics.items);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      {" "}
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div>
          <div>
            <Link to={"/"}>HOME</Link>
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              margin: "auto",
              marginTop: "15px",
            }}
          >
            <img
              src={detail.thumbnail.path + ".jpg"}
              alt={detail.name}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "100%",
                marginRight: "5px",
                filter: "drop-shadow(5px 5px 5px #000)",
              }}
            />
          </div>

          <h1>{detail.name}</h1>
          <div>
            <ul>
              {contentArr.map((val, idx) => (
                <div key={idx}>
                  <li id={idx}>
                    <div>
                      <h3>[{val}]</h3>
                      <div>
                        <ul>
                          {detail[val]["items"].map((item, idx) => (
                            <Content key={idx} id={idx} name={item.name} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <hr />
                </div>
              ))}

              {/* <li>
                <div>
                  <h3>comics</h3>
                  <div>
                    <ul>
                      {detail.comics.items.map((item, idx) => (
                        <Content key={idx} id={idx} name={item.name} />
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <h3>series</h3>
                  <div>
                    <ul>
                      {detail.comics.items.map((item, idx) => (
                        <Content key={idx} id={idx} name={item.name} />
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <h3>stories</h3>
                  <div>
                    <ul>
                      {detail.comics.items.map((item, idx) => (
                        <Content key={idx} id={idx} name={item.name} />
                      ))}
                    </ul>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
