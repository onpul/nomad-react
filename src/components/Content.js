import Proptypes from "prop-types";

function Content({ id, name }) {
  //   console.log(id);
  return (
    <li key={id} id={id}>
      {name}
    </li>
  );
}

Content.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
};
export default Content;
