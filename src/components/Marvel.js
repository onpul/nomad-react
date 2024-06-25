import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Marvel({ id, img, name }) {
  return (
    <li key={id} style={{ borderBottom: "1px solid lightgray" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "content-distribution",
          padding: "14px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            marginRight: "5px",
          }}
        >
          <img
            src={img}
            alt={name}
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
        <div>
          <h3>
            <Link to={`/character/${id}`}>{name}</Link>
          </h3>
        </div>
      </div>
    </li>
  );
}

Marvel.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Marvel;
