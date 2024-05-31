import React from 'react'
import Slider from "react-slick";
import { Image } from 'antd'

const SliderComponent = ({ arrImages }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <Slider {...settings} width="60px">
            {arrImages.map((image) => {
                return (
                    <Image src={image} alt="slider" preview={false} />
                )
            })}
        </Slider>
    )
}

export default SliderComponent
