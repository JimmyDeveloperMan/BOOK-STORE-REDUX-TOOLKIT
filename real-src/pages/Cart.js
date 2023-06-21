import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeToCart } from "../rtk/slices/cart-slices";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const disPatch = useDispatch();
  const totalPrice = cart.reduce((a, c) => a + c.price * c.count, 0).toFixed(2)

  return (
    <>
      <Container>
        <h1 className="pageTitle"> Cart Page</h1>

        {cart.length ? (
          <Button
            variant="dark"
            className="ms-auto d-flex mb-1 "
            onClick={() => disPatch(clearCart())}
          >
            Clear Cart
          </Button>
        ) : null}
        {cart.length ? <h4>Total Price: ${totalPrice}</h4> : null}

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Img</th>
              <th>Title</th>
              <th>Price</th>
              <th>Count</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((el, i) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td style={{ width: "70px" }}>
                    <img style={{ width: "70px" }} src={el.image} alt="" />
                  </td>
                  <td> {el.title}</td>
                  <td>${el.price}</td>
                  <td>{el.count}</td>
                  <td>{el.category}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => disPatch(removeToCart(el))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
