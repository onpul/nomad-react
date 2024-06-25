import { useEffect, useState } from "react";
import Marvel from "../components/Marvel";
function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023",
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.data.results);
        setLoading(false);
        // console.log(json.data.results);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Marvel Characters Catalog</h1>
      {loading ? (
        "LOADING..."
      ) : (
        <>
          <h3>
            총 <span style={{ color: "#ec1d24" }}>{data.length}</span> 종류의
            마블 캐릭터를 확인할 수 있습니다.
          </h3>
          <hr />
          <div>
            <ul>
              {data.map((item) => (
                <Marvel
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.thumbnail.path + ".jpg"}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
export default Main;
