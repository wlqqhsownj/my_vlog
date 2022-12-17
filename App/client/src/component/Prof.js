import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Figure from "react-bootstrap/Figure";
import React from "react";
import p1 from "../pic/sch.png";
import p2 from "../pic/sch_2.jpg";
import p3 from "../pic/lee.png";
import p4 from "../pic/lm_2.jpg";
import "../Style/Prof.css";

function Prof(props) {
    return (
        <Container id="prof">
            <Row className="rows">
                <Col sm style={{ textAlign: "center" }}>
                    <h5>여러분과 함께 하는</h5>
                    <h1>교수진 소개</h1>
                </Col>
            </Row>
            <Row className="rows">
                <Col xs={12} md={12} lg={4} className="btn_shadow">
                    <Figure>
                        <Figure.Image alt="" src={p1} />
                    </Figure>
                </Col>
                <Col xs={12} md={12} lg={4} className="btn_shadow">
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h4>
                                    노승철교수<h5>(학부장)</h5>
                                </h4>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ textAlign: "left" }}>
                                <h5> 연구분야</h5>
                                <h6>도시계획, 공공빅데이터분석, 공간정보분석, 도시정보학</h6>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ textAlign: "left" }}>
                                <h5>학력</h5>
                                <h6>
                                    서울대학교 환경대학원 환경계획학과 박사
                                    <br />
                                    서울대학교 환경대학원 환경계획학과 석사
                                    <br />
                                    중앙대학교 공과대학 건축학과 학사
                                </h6>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ textAlign: "left" }}>
                                <h5>경력</h5>
                                <h6>
                                    한국부동산분석학회 교육연구위원회 이사(2017.01~현재)· 한국주택학회,
                                    이사(2019.01~현재), 서울연구원 도시정보실 빅데이터분석팀장, 한양대
                                    도시부동산빅데이터 겸임교수
                                </h6>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className="btn_shadow">
                    <Figure>
                        <Figure.Image className="thirdFig" alt="" src={p2} />
                    </Figure>
                </Col>
            </Row>

            <Row className="rows">
                <Col xs={12} md={12} lg={4} className="btn_shadow">
                    <Figure>
                        <Figure.Image alt="" src={p3} />
                    </Figure>
                </Col>
                <Col xs={12} md={12} lg={4} className="btn_shadow">
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ textAlign: "center" }}>
                                <h4>
                                    이석민교수
                                    <h5>(공공빅데이터분석전공 주임교수)</h5>
                                </h4>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ textAlign: "left" }}>
                                <h5> 연구분야</h5>
                                <h6>정책분석, 사회실험평가, 계량경제학, R&D정책, 데이터분석, 인공지능 프로그래밍 등</h6>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ textAlign: "left" }}>
                                <h5>학력</h5>
                                <h6>
                                    서울대학교 정치학 박사(과학기술정책)
                                    <br />
                                    서울대학교 정치학 석사(정치학)
                                    <br />
                                    서울대학교 문학사(인류학)
                                </h6>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ textAlign: "left" }}>
                                <h5>경력</h5>
                                <h6>
                                    서울시 안심소득 평가자문위원회 위원(2021.10~현재)
                                    <br /> 통계청 자체평가위원회 위원(2021.01~현재)
                                    <br /> 지방공기업 경영평가 위원(2019.01~현재)
                                </h6>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col xs={12} md={12} lg={4} className="btn_shadow">
                    <Figure>
                        <Figure.Image className="thirdFig" alt="" src={p4} />
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
}

export default Prof;
