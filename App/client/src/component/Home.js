import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Style/Home.css";
import ever from "../pic/ever.jpg";
import mu from "../pic/mu.jpg";
import lotte from "../pic/lotte.jpg";
import sky from "../pic/sky.jpg";
import pc from "../pic/pc.jpg";
import meet from "../pic/meet.jpg";
import me from "../pic/me.jpg";
import hyun from "../pic/hyun.jpg";
import drop from "../pic/drop.jpg";
import osan from "../pic/osan.jpg";
import ya from "../pic/ya.jpg";
import tong from "../pic/tong.jpg";
import nayana from "../pic/nayana.jpg";

function RowColLayoutExample() {
    return (
        <Container>
            <Row>
                <Col xs={4} md={4} style={{ border: "" }}>
                    <div className="img">
                        <img src={lotte} alt="" height="350" weight="300" />
                    </div>
                </Col>
                <Col xs={4} md={4} style={{ border: "" }}>
                    <div className="img">
                        <img src={ever} alt="" height="350" weight="300" />
                    </div>
                </Col>
                <Col xs={4} md={4} style={{ border: "" }}>
                    <div className="img">
                        <img src={mu} alt="" height="350" weight="300" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col style={{ border: "" }}>
                    <div class="Main">
                        <p class="mainword">My life, My rest time</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <Col xs={6} md={{ span: 5, offset: 0 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={sky} alt="" height="250" weight="200" />
                            </div>
                        </Col>
                        <Col xs={6} md={{ span: 6 }} style={{ border: "" }}>
                            <div class="fly">
                                <p1 class="word"> Journey: into a new world </p1>
                                <p class="word1">
                                    Cross the sky and fly over the sea to a new world. Learn to experience and feel new
                                    things.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={{ span: 5, offset: 0 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={pc} alt="" height="250" weight="200" />
                            </div>
                        </Col>
                        <Col xs={6} md={{ span: 6 }} style={{ border: "" }}>
                            <div class="fly">
                                <p1 class="word"> Hobbies: Relieve stress </p1>
                                <p class="word1">
                                    A rest like a sound sleep to your tired body and mind while doing what you love.
                                    Anything is fine, like a mirage If it's something you can forget about work and be
                                    happy.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={{ span: 5, offset: 0 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={meet} alt="" height="250" weight="200" />
                            </div>
                        </Col>
                        <Col xs={6} md={{ span: 6 }} style={{ border: "" }}>
                            <div class="fly">
                                <p1 class="word"> Promise: let's play again </p1>
                                <p class="word1">
                                    It may be tiring and tiring with a lot of work to do, but if you have friends, you
                                    can endure it. together Anything is fine, let's play again.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={2} style={{ border: "" }} />
                <Col xs={12} md={4} style={{ border: "", background: "linen" }}>
                    <Row>
                        <Col xs={12} md={{ span: 10, offset: 1 }} style={{ border: "" }}>
                            <div class="img">
                                <img src={me} alt="" height="270" weight="300" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={{ span: 4, offset: 4 }} style={{ border: "" }}>
                            <div class="name">
                                <p class="na">YeJi Lee </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={{ span: 5, offset: 1 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={hyun} alt="" height="130" weight="200" />
                            </div>
                        </Col>
                        <Col xs={6} md={{ span: 3 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={drop} alt="" height="130" weight="200" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={{ span: 5, offset: 1 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={osan} alt="" height="130" weight="200" />
                            </div>
                        </Col>
                        <Col xs={6} md={{ span: 3 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={ya} alt="" height="130" weight="200" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={{ span: 5, offset: 1 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={tong} alt="" height="130" weight="200" />
                            </div>
                        </Col>
                        <Col xs={6} md={{ span: 3 }} style={{ border: "" }}>
                            <div className="img">
                                <img src={nayana} alt="" height="130" weight="200" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default RowColLayoutExample;
