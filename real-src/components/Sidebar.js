import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to={"/products"}>All Products</Link>
        </li>
        <li>
          <Link to={"/categories"}>All Categories</Link>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
