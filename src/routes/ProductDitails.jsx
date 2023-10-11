import { Button, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cart-slice";
import { useEffect } from "react";
import { cleanUpProduct, productDitails } from "../store/slices/products-slice";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductDitails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, product } = useSelector((st) => st.productsSlice);
  useEffect(() => {
    dispatch(productDitails(id));
    return () => {
      dispatch(cleanUpProduct());
    };
  }, [dispatch, id]);
  return (
    <>
      <Header />
      <Loading loading={loading} error={error}>
        <Col key={product?.id} style={{ margin: " 20px" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "300px" }}
              variant="top"
              src={product?.image}
            />
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Text>{product?.suptitle}</Card.Text>
              <Card.Text>{product?.authors}</Card.Text>
              <Card.Text>${product?.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Add Cart
              </Button>
              <Link
                to={product?.url}
                style={{ marginLeft: "23px", color: "#777" }}
              >
                Vist for more ditails
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Loading>
    </>
  );
}
export default ProductDitails;
