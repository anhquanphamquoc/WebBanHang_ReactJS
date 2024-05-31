import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style';
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            style={{ width: 240, height: 300 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct style={{ marginBottom: 10 }}>Iphone</StyleNameProduct>
            <WrapperReportText>
                <span>
                    <span>4.96</span><StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
                </span>
                <span>| Đã bán 1000+</span>
            </WrapperReportText>
            <WrapperPriceText>1.000.000d
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent
