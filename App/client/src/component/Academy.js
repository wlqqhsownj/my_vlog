import React from "react";
import "../Style/Academy.css";
import Card from "../Style/Card";
import data from "../API/AcademyApi";

const Academy = () => {
    return (
        <>
            <section className="academy">
                <div className="container top">
                    <div className="heading">
                        <h1 className="text-center">학회와 사회진출반</h1>
                        <h4>
                            공빅학부는 3개의 학회를 두어 선배와 후배 간의 학문적 교류와 함께 각 전공에 대한 심화연구를
                            지원하고 있다.
                            <br />
                            공빅학부는 2개의 사회진출 준비반을 두어 졸업 후 진로를 준비할 수 있도록 돕고 있다.
                        </h4>
                    </div>

                    <div className="top modal-grid">
                        {data.map((value, index) => {
                            return (
                                <Card
                                    key={index}
                                    image1={value.image1}
                                    image2={value.image2}
                                    category={value.category}
                                    title_one={value.title_one}
                                    totalLike={value.totalLike}
                                    desc_one={value.desc_one}
                                    desc_two={value.desc_two}
                                    desc_three={value.desc_three}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academy;
