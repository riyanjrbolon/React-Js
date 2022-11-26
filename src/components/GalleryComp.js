import React from "react";
import { Container, Row, Col} from "react-bootstrap"

import Gallery1 from "../assets/img/gallery/gallery-1.jpg";
import Gallery2 from "../assets/img/gallery/gallery-2.jpg";
import Gallery3 from "../assets/img/gallery/gallery-3.jpg";
import Gallery4 from "../assets/img/gallery/gallery-4.jpg";
import Gallery5 from "../assets/img/gallery/gallery-5.jpg";
import Gallery6 from "../assets/img/gallery/gallery-6.jpg";

const GalleryComp = () => {
    return (
        <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
            <Container>
                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
                    <Col><img src={Gallery1} alt="CodeRiyan" className="w-100" data-aos="fade-up" /></Col>
                    <Col><img src={Gallery2} alt="CodeRiyan" className="w-100" data-aos="fade-up" /></Col>
                    <Col><img src={Gallery3} alt="CodeRiyan" className="w-100" data-aos="fade-up" /></Col>
                    <Col><img src={Gallery4} alt="CodeRiyan" className="w-100" data-aos="fade-up" /></Col>
                    <Col><img src={Gallery5} alt="CodeRiyan" className="w-100" data-aos="fade-up" /></Col>
                    <Col><img src={Gallery6} alt="CodeRiyan" className="w-100" data-aos="fade-up" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default GalleryComp;