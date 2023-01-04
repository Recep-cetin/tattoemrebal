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
import "../assets/css/css.css"
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view

import Pagination from "views/IndexSections/Pagination.js";
import Typography from "views/IndexSections/Typography.js";
import { Container, Row, Col } from "reactstrap";
export default function Index() {
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <PageHeader />
                <div className="main">
                    <Container>

                        <div id="typography">
                            <Row>
                                <Col md="12">

                                    <div className="typography-line">
                                        <span>Bal : </span>
                                        <blockquote>
                                            <p className="blockquote blockquote-info">
                                                Yılardır birikmiş tecrübe ve  deneyimlerimizle <br />
                                                sizlere renkli ve standart dövmenin yanında  <br />
                                                piercing hizmeti vermekteyiz her türlü renk ve<br />
                                                kişiye özel çizimler sizler için hazır ...<br />

                                            </p>
                                        </blockquote>
                                    </div>
                                    <div className="typography-line">
                                        <span>Bal : </span>
                                        <blockquote>
                                            
                                            <p className="blockquote blockquote-success" style={{color:"red"}}>


                                                BY EMRE TATTOO STUDİOS<br />

                                                Dövme ve Piercing Dükkanı<br />
                                                ▪️İstanbul/Sultanbeyli<br />
                                                ▫️Sadece Randevu  <br />
                                                -> Randevu<br />
                                                Tel: 0216 496 34 04<br />
                                                Gsm: 0546 969 34 04<br />


                                            </p>
                                        </blockquote>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <Typography />
                    <div className="google">
                        <iframe className="item" src="//maps.google.com/maps?output=embed&amp;q=Abdurrahmangazi%2C%20Osman%20Bedrettin%20Sk.%20No%3A4%20D%3Aaire7%2C%2034000%20Sultanbeyli%2F%C4%B0stanbul&amp;z=15&amp;t=m" data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIyQWJkdXJyYWhtYW5nYXppJTJDJTIwT3NtYW4lMjBCZWRyZXR0aW4lMjBTay4lMjBObyUzQTQlMjBEJTNBYWlyZTclMkMlMjAzNDAwMCUyMFN1bHRhbmJleWxpJTJGJUM0JUIwc3RhbmJ1bCUyMiUyQyUyMnpvb20lMjIlM0ExNSUyQyUyMnR5cGVJZCUyMiUzQSUyMnJvYWQlMjIlMkMlMjJsYW5nJTIyJTNBbnVsbCUyQyUyMmFwaUtleSUyMiUzQW51bGwlMkMlMjJtYXJrZXJzJTIyJTNBJTVCJTVEJTdE"></iframe>
                    </div> 
                </div>
                <Footer />
            </div>
        </>
    );
}
