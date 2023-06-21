import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/slices/cart-slice";
import CartHundler from "../components/CartHundler";
import Header from "../components/Header";
function Cart() {
  const { cart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const totalPrice = cart
    .reduce((a, b) => (a += +b.price) * +b.count, 0)
    .toFixed(2);
  return (
    <>
      <Header />
      <Container>
        <h1 className="pageTitle"> Cart Page</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ color: "#111" }}>Total Price: ${totalPrice}</h5>
          <Button
            className="ms-auto d-flex mb-1 "
            variant="dark"
            onClick={() => dispatch(clearCart())}
            disabled={!cart.length}
          >
            Clear
          </Button>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#id</th>
              <th>Img</th>
              <th>Title</th>
              <th>Price</th>
              <th>Count</th>
              <th>Authors</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <CartHundler />
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
