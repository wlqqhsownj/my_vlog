import React from "react";
import "../Style/Major.css";
import major1 from "../pic/yg.jpg";
import major2 from "../pic/sm.png";

const Major = () => {
    return (
        <section className="major">
            <div className="top box1">
                <h1>
                    한신 공빅은 전국 최초로 사회과학(공공관리전공)과 빅데이터(공공빅데이터전공)를 <br /> 모두 함께
                    공부할 수 있는 융합학부입니다.
                </h1>
            </div>
            <div className="box2 h_btn_shadow">
                <h2>새 시대 공공인재를 꿈꿉니다 (공공관리전공)</h2>
            </div>

            <div className="box3">
                <img src={major1} alt="YG" width="250px" height="250px" />
                <h1>공공관리 주임교수</h1>
                <h2>윤건 교수(행정학)</h2>

                <br />
                <h1>연구 분야</h1>
                <h2>
                    데이터 기반 행정,
                    <br />
                    데이터 기반 조직 및
                    <br />
                    인사관리
                </h2>
            </div>

            <div className="box4">
                <h2>
                    공공관리 전공에서 행정, 법률, 인사, 재무 등 공공의 기초학문부터 데이터 기반 행정과 지능정부까지
                    새로운 교과과정을 갖추었습니다. <br />
                    공무원시험준비반에서 선후배와 함께 준비하세요.
                </h2>
                <h2>
                    <br />
                </h2>

                <table border="1" bordercolor="blue" width="800" align="center">
                    <tr>
                        <th scope="col">학년</th>
                        <th scope="col">과목</th>
                    </tr>
                    <tr>
                        <td height="80" width="80" align="center">
                            1학년
                        </td>
                        <td>공공관리개론, 공공조직관리론, 데이터기반 조직 및 인사관리, 사회조사분석</td>
                    </tr>

                    <tr>
                        <td height="80" width="80" align="center">
                            2학년
                        </td>
                        <td>형사법, 공공인사관리, 데이터 기반 재무관리, 행정법, 데이터기반 정책관리, 조사연구방법론</td>
                    </tr>
                    <tr>
                        <td height="80" width="80" align="center">
                            3학년
                        </td>
                        <td>
                            지방자치와 행정, 지능정부와 데이터기반 행정, 재무관리, 정책평가, 공기업론, 시민참여,
                            정책분석과 기획, 지역문제 해결실습 I
                        </td>
                    </tr>
                    <tr>
                        <td height="80" width="80" align="center">
                            4학년
                        </td>
                        <td>공기업론, 공공가치, 공공혁신, 졸업논문</td>
                    </tr>
                </table>
            </div>

            <div className="box5 data">
                <h2>문과도 이과도.. 빅데이터 전문가(공공빅데이터전공)</h2>
            </div>

            <div className="box6">
                <h2>
                    데이터 분석은 컴퓨터과학과 통계학만으로 되지 않습니다. 여러분의 인문사회학적 감각이
                    <br /> 더해져 사회문제를 찾고 해결할 때 진정한 가치를 발휘합니다. <br />
                    여러분이 문과든, 이과든 관계없습니다. 공공빅데이터전공에서는 빅데이터분석의 실습을 <br />
                    통해 기초부터 배울 수 있는 국내 최고의 교과과정을 갖추고 있습니다.
                </h2>
                <h2>
                    <br />
                </h2>

                <table border="1" bordercolor="blue" width="800" align="center">
                    <tr>
                        <th scope="col">학년</th>
                        <th scope="col">과목</th>
                    </tr>
                    <tr>
                        <td height="80" width="80" align="center">
                            1학년
                        </td>
                        <td>빅데이터의이해와 활용, 기초프로그래밍</td>
                    </tr>

                    <tr>
                        <td height="80" width="80" align="center">
                            2학년
                        </td>
                        <td>
                            다변량데이터분석, 머신러닝이해와 활용, 웹프로그래밍, 데이터베이스와SQL, GIS를 이용한
                            공간정보분석, 머신러닝 비지도학습, 딥러닝 기초, 모바일 앱 프로그래밍
                        </td>
                    </tr>
                    <tr>
                        <td height="80" width="80" align="center">
                            3학년
                        </td>
                        <td>
                            공간정보분석론, 도시 및 지역분석, 소셜네트워크분석, 딥러닝 영상데이터분석, 지역문제해결실습Ⅰ
                        </td>
                    </tr>
                    <tr>
                        <td height="80" width="80" align="center">
                            4학년
                        </td>
                        <td>
                            지역문제해결실습 Ⅱ, 딥러닝 자연어처리, 딥러닝 강화학습, 빅데이터와 개인정보보호,
                            IOT데이터분석, 졸업논문
                        </td>
                    </tr>
                </table>
            </div>

            <div className="box7">
                <img src={major2} alt="lm" width="250px" height="250px" />
                <h1>공공빅데이터 주임교수</h1>
                <h2>이석민 교수(데이터분석)</h2>

                <br />
                <h1>연구 분야</h1>
                <h2>
                    정책분석, 사회실험평가, 데이터분석
                    <br />
                    R&D정책, 계량경제학,
                    <br />
                    인공지능 프로그래밍 등
                </h2>
            </div>
        </section>
    );
};

export default Major;
