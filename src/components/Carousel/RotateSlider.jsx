import React from "react";
import "./RotateSlider.css";
import { Col, Row } from "antd";
import portfolio1 from "../../images/portfolio1.png";
import slide1 from "../../images/slide1.jpg";
const RotateSlider = () => {
  return (
    <Row>
      <Col xxl={24} xl={24} lg={24} md={24} sm={12} xs={12}>
        <div class="container">
          <div id="carousel">
            <figure>
              <img src={slide1} alt="" />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="https://source.unsplash.com/WLUHO9A_xik/300x150"
                alt=""
              />
            </figure>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default RotateSlider;
