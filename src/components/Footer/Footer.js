 
import React from "react"; 
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
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
 