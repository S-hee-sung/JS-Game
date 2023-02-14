
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import shopImg from "../images/shop-image1.jpg";
import yonex from "../images/yonex.jpg";


const MainBackground = styled.div`
  height: 500px;
  background-image: url(${shopImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  return (  
    <>
      <section>
        <MainBackground />
      </section>
      <section>
        <Container>
          <Row>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;