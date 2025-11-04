import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Thoitrangnu = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        const data = response.data.filter(
          (item) => item.category === "dienthoai"
        );
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const { addItem } = useCart();

  const addToCart = (item) => {
    addItem(item);
  };

  return (
    <div>
      <Row xs={1} sm={2} md={3} lg={4} xl={5}>
        {products.map((item) => (
          <Col key={item.id}>
            <Card
              style={{ height: "350px" }}
              className="text-center p-0 overflow-hidden shadow mx-auto mb-4 mt-3"
            >
              <Link to={`/product-details/${item.id}`}>
                <div
                  style={{
                    background: "white",

                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "inherit",
                  }}
                >
                  <div style={{ width: "300px" }}>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="img-fluid w-100 h-100"
                    />
                  </div>
                </div>
              </Link>
              <Card.Body>
                <Card.Title
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <small>{item.title}</small>
                </Card.Title>
                <Card.Title>
                  <small>
                    Giá bán: <small>{item.price}đ</small>
                  </small>
                </Card.Title>
                <Button
                  className="d-flex align-items-center m-auto border-0"
                  onClick={() => addToCart(item)}
                  style={{ backgroundColor: '#fc5a31', border: '0' }}
                >
                  <BsCartPlus size="1.8rem" />

                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Thoitrangnu;
