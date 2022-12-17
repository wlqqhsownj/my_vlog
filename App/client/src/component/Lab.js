import React from "react";
import "../Style/Lab.css";

const Lab = () => {
    return (
        <>
            <section className="lab1">
                <div className="back">
                    <div className="head">
                    <h3 className="text-center1">
                        학부 연구실
                    </h3>
                    <h5 className="text-center2">
                        홈 > 학부 연구실
                    </h5>
                    </div>
                </div>
            </section>

            <section className="lab">
                <div className="container top">
                    <div className="heading">
                        <h1 className="text-center">학부 연구실</h1>
                        <h4>
                            공빅학부는 각 전공별로 실습을 위한 연구실이 별도로 마련되어 재학생의 연구를 지원하고
                            있습니다.
                        </h4>
                    </div>
                </div>
            </section>
            <section className="lab2">
            <div className="gonggong1">
                    <div className="gwanli">
                        <h2 className="name">
                            공공관리 연구실
                        </h2>
                        <h4>재학생은 2학년부터 공빅학부 공공관리연구실에서 세미나 및 공무원시험 준비를 할 수 있으며, 공무원시험준비반에 참여하여 공공정책 연구실에서 지도교수 및 선후배 재학생들과 함께 시험을 준비합니다.</h4>
                    </div>
                    <div className="line" />
                    <div className="big">
                        <h2 className="name">
                            공공빅데이터 연구실
                        </h2>
                        <h4>
                        재학생은 2학년부터 공기업 및 민간기업 취업을 위한 빅데이터 분석 및 인공지능 활용 역량을 기르기 위한 전산환경을 갖추고 있으며, 지도교수와 함께 세미나와 스터디를 수행합니다. 공기업자격증준비반은 AI빅데이터 연구실에서 지도교수 및 재학생들과 함께 자격증 시험을 준비합니다.
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lab;
