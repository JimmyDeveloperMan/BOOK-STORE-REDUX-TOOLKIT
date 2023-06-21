import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../store/slices/cart-slice";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartHundler = () => {
  const { cart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {cart.length ? (
        cart.map((el, i) => {
          return (
            <tr key={el.id}>
              <td>#{el.id}</td>
              <td style={{ width: "70px" }}>
                <img style={{ width: "70px" }} src={el.image} alt="" />
              </td>
              <td> {el.title}</td>
              <td>${el.price}</td>
              <td>{el.count}</td>
              <td>{el.authors}</td>
              <td>
                <ButtonGroup>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeToCart(el))}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => navigate(`../../products/${el.id}/details`)}
                  >
                    View
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        })
      ) : (
        <tr style={{ color: "#111" }}>
          <td colSpan={7}>Cart Is Empty!!</td>
        </tr>
      )}
    </>
  );
};

export default CartHundler;
