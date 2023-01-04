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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">Emre BAL •</h1>
          </Col>
         
          <Col md="3">
            <h3 className="title">Hakkımda :</h3>
            <div className="btn-wrapper profile">
            

      {/*  //buradan itibaren  */}
             
            <Button
              className="btn-icon btn-round"
              color="whatsapp"
              id="whatsapp"
              href="https://api.whatsapp.com/send?phone=905469693404"
              size="lg"
            >
              <i className="fab fa-whatsapp" />
            </Button>
          
            <Button
              className="btn-icon btn-round"
              color="red"
              id="Instagram"
              href="https://www.instagram.com/tattoooemre/"
              size="lg"
            >
              <i className="fab fa-instagram" />
            </Button>
           
               
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
 