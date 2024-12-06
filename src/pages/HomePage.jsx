import videoBg from "../assets/Video/bgVideo.mp4";
import * as Icon from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

import "../dist/css/homePage.css";

function HomePage() {
    return (
        <div>
            <div className="color-transparant"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="icon">
                <div className="icon-content">
                    <Icon.Truck size={80} />
                    <div className="icon-text">
                        <p>60 +</p>
                        <p className="icon-text-2">
                            Hi-Blow Trucks,
                            <br /> and Dump Truck.
                        </p>
                    </div>
                </div>
                <div className="icon-content">
                    <Icon.Clipboard2Check size={80} />
                    <div className="icon-text">
                        <p>22 +</p>
                        <p className="icon-text-2">Years of experience</p>
                    </div>
                </div>
                <div className="icon-content">
                    <Icon.People size={80} />
                    <div className="icon-text">
                        <p>25 +</p>
                        <p className="icon-text-2">Client</p>
                    </div>
                </div>
            </div>

            <div className="layanan-kita">
                <Container>
                    <p className="layanan-judul">Layanan Kami</p>
                    <div className="layanan-content">
                        <Card style={{ width: "30rem" }} border="0">
                            <Icon.Boxes size={100} />
                            <Card.Body>
                                <Card.Title>
                                    <p>General Supplier</p>
                                </Card.Title>
                                <Card.Text>
                                    Memasok kebutuhan bahan baku
                                    industri,kontruksi,manufaktur,pertambangan,dan
                                    lain-lain
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "30rem" }} border="0">
                            <Icon.TruckFrontFill size={100} />
                            <Card.Body>
                                <Card.Title>
                                    <p>Transporter & Logistics</p>
                                </Card.Title>
                                <Card.Text>
                                    Menyediakan solusi pengiriman cepat,
                                    efisien, dan terbaik. Dengan layanan "Super
                                    excellence Service" sehingga dapat menjamin
                                    kebutuhan produksi anda tetap efisien
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default HomePage;
