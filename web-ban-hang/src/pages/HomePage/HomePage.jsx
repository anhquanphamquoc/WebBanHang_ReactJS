import React, { useRef, useEffect, useState } from 'react';
import TypeProducts from '../../components/TypeProducts/TypeProducts'
import { WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import slider1 from "../../assets/images/slider1.png"
import slider2 from "../../assets/images/slider2.png"
import slider3 from "../../assets/images/slider3.png"

import weapon1 from "../../assets/images/weaponbanner1.webp"
import weapon2 from "../../assets/images/weaponbanner2.webp"
import weapon3 from "../../assets/images/weaponbanner3.webp"
import weapon4 from "../../assets/images/weaponbanner4.webp"

import CardComponent from '../../components/CardComponent/CardComponent'
import { Image } from 'antd'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

const HomePage = () => {
    const arr = ['TV', 'Tủ lạnh', 'Laptop']

    const sliderRef = useRef(null);
    const [sliderHeight, setSliderHeight] = useState(0);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.target === slider) {
                    setSliderHeight(entry.contentRect.height);
                }
            }
        });

        resizeObserver.observe(slider);

        // Clean up the observer on unmount
        return () => {
            resizeObserver.unobserve(slider);
        };
    }, []);

    return (
        <div style={{ width: '1630px' }}>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProducts name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div id='container' style={{ width: '100%', backgroundColor: '#efefef', padding: '0 120px' }}>
                <div style={{ display: 'flex' }}>
                    <div ref={sliderRef} style={{ width: '688px' }}>
                        <SliderComponent arrImages={[slider1, slider2, slider3]} />
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <div style={{ display: 'flex', gap: "100px", marginBottom: "20px" }}>
                            <Image src={weapon1} style={{ height: sliderHeight / 2 - 20 }} alt="weapon"></Image>
                            <Image src={weapon2} style={{ height: sliderHeight / 2 - 20 }} alt="weapon"></Image>
                        </div>
                        <div style={{ display: 'flex', gap: "100px" }}>
                            <Image src={weapon3} style={{ height: sliderHeight / 2 - 20 }} alt="weapon"></Image>
                            <Image src={weapon4} style={{ height: sliderHeight / 2 - 20 }} alt="weapon"></Image>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
                    <div style={{ backgroundColor: '#FFF', padding: '20px', borderRadius: '10px' }}>
                        <NavbarComponent />
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <ButtonComponent
                                textButton="Xem thêm"
                                styleButton={{
                                    border: '1px solid rgb(11, 116, 229)',
                                    color: 'rgb(11,116,229)',
                                    width: '450px',
                                    height: '38px',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
