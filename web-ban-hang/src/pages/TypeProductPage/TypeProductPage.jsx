import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const TypeProductPage = () => {
    return (
        <div id='container' style={{ width: '100%', backgroundColor: '#efefef', padding: '0 120px' }}>
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
    )
}

export default TypeProductPage
