/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
     
       
      <Container>
       
        <div className="space-50" />
        <div id="images">
          <h3 className="mb-5">Images</h3>
          <Row>
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-1.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"  }}
              />
            </Col>
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-5.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"  }}
              />
            </Col>
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-8.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"  }}
              />
            </Col>
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-2.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"  }}
              />
            </Col>
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-3.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"  }}
              />
            </Col>
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-4.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"  }}
              />
            </Col>
           
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-6.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"  }}
              />
            </Col>
            <Col sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/img/img-7.jpg")}
                style={{ width: "150px",height :"180px",marginTop:"8px"   }}
              />
            </Col>
           
          
          
          </Row>
        </div>
      </Container>
    </div>
  );
}
