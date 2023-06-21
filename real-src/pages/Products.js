import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slices";
function Products() {
  const disPatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    disPatch(fetchProducts());
  }, [disPatch]);
  
  return (
    <>
      <Container>
        <h1 className="pageTitle">Products Page</h1>
        <Row>
          {products.map((el) => {
            return (

              <Col key={el.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ height: "300px" }}
                    variant="top"
                    src={el.image}
                  />
                  <Card.Body>
                    <Card.Title>
                      {el.title.split(" ").slice(0, 10).join(" ")}
                    </Card.Title>
                    <Card.Text>
                      {el.description.split(" ").slice(0, 30).join(" ")}
                    </Card.Text>
                    <Card.Text>${el.price}</Card.Text>
                    <Card.Text>{el.rating.rate}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        disPatch(addToCart(el));
                      }}
                    >
                      Add Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Products;
