import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styled from "styled-components";
import "../css/Main.scss";

const MAINSLIDE = [
    {
        id: 1,
        tit: "아파트입주청소",
        con: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소",
        des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.",
    },
    {
        id: 2,
        tit: "이사/상가청소",
        con: "오랫동안 누적된 공간의 묵은 때, 찌든 때, 누적된 먼지와 세균들을 이사하기전에 청소",
        des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다.",
    },
    {
        id: 3,
        tit: "사무실청소",
        con: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소",
        des: "사무실청소에 있어서 가장 중요한 점은 빠른 시간 내에 완벽한 작업을 마무리 하는 것이 중요합니다.",
    },
];

const SlideItem = styled.div`
    .tit {
        font-size: 80px;
    }
`;

const MainVisual = () => {
    return (
        <section className="MainVisual">
            <Swiper
                className="MainSlide"
                direction={"vertical"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {MAINSLIDE.map((sl, idx) => {
                    return (
                        <SwiperSlide>
                            <SlideItem>{sl.tit}</SlideItem>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default MainVisual;
