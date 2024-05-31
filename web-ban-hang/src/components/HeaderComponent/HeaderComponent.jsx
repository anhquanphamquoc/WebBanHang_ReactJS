import React from 'react'
import { Col, Row, Input, Space, Button } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import { AudioOutlined, UserOutlined, CaretDownOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { WrapperHeaderAccount } from './style';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);


const HeaderComponent = () => {
    const onSearch = (value) => {
        console.log('Search value:', value);
        // Xử lý gì đó ở đây, ví dụ: gửi yêu cầu tới API hoặc cập nhật state
    };
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperTextHeader>KONEKO</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton={
                        <Button type="primary">
                            Tìm kiếm <SearchOutlined />
                        </Button>
                    } />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined className='CustomUserIcon' />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <br></br>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>

                </Col>
            </WrapperHeader>
        </div >
    )
}

export default HeaderComponent
