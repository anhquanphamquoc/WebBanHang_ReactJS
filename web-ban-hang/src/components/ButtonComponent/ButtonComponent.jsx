import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, ...rests }) => {
    return (
        <Button
            size={size}
            style={styleButton}
            // icon={<SearchOutlined color={colorButton} style={{ color: "fff" }} />}
            {...rests}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonComponent
