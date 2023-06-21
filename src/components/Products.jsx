import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cart-slice";

import { useNavigate, useParams } from "react-router-dom";
import { productDitails } from "../store/slices/products-slice";
import { useEffect } from "react";

function Products() {
  const { products } = useSelector((state) => state.productsSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Row>
        {products.map((el) => (
          <Col key={el.id} style={{ margin: " 20px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={el.image}
              />
              <Card.Body>
                <Card.Title
                  style={{ cursor: "pointer" }}
                  onClick={() =>   navigate(`products/${el.id}/details`)}
                >
                  {el.title}
                </Card.Title>
                <Card.Text>{el.suptitle}</Card.Text>
                <Card.Text>{el.authors}</Card.Text>
                <Card.Text>${el.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(el))}
                >
                  Add Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Products;
