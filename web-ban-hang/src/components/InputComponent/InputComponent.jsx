import React from 'react'

const InputComponent = ({ size, placeholder, bordered, style, ...rests }) => {
    return (
        <input>
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            style={style}
            {...rests}
        </input>
    )
}

export default InputComponent
