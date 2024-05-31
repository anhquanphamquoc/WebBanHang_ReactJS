import React, { useState } from 'react';
import { WrapperContent, WrapperTextValue } from './style';
import { Checkbox, Rate, Radio } from 'antd';

const plainOptions = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

const priceOptions = [
    { label: 'Dưới 100.000đ', value: 'under100' },
    { label: 'Trên 100.000đ', value: 'over100' },
    { label: 'Dưới 500.000đ', value: 'under500' },
    { label: 'Trên 500.000đ', value: 'over500' },
];

const starRatings = [3, 4, 5]; // Giá trị ví dụ cho Rate

const NavbarComponent = () => {
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [checkedList, setCheckedList] = useState(['Pear']); // Thêm state để quản lý giá trị Checkbox

    const onPriceChange = (e) => {
        const value = e.target.value;
        setSelectedPrice((prevSelectedPrice) => prevSelectedPrice === value ? null : value);
        console.log('price selected = ', selectedPrice === value ? null : value);
    };

    const onCheckboxChange = (checkedValues) => {
        setCheckedList(checkedValues);
        console.log('checked = ', checkedValues);
    };

    const renderContent = (type, options = []) => {
        switch (type) {
            case 'text':
                return options.map((item, index) => (
                    <WrapperTextValue key={index}>{item}</WrapperTextValue>
                ));
            case 'checkbox':
                return (
                    <Checkbox.Group
                        style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}
                        options={plainOptions}
                        value={checkedList} // Sử dụng state để quản lý giá trị
                        onChange={onCheckboxChange}
                    />
                );
            case 'price':
                return (
                    <Radio.Group
                        options={options}
                        onChange={onPriceChange}
                        value={selectedPrice}
                        optionType="button"
                        buttonStyle="solid"
                        style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '125px' }}
                    />
                );
            case 'star':
                return options.map((rating, index) => (
                    <Rate key={index} disabled defaultValue={rating} />
                ));
            default:
                return null;
        }
    };

    return (
        <div>
            <WrapperContent>
                {renderContent('text', ['Tủ lạnh', 'TV', 'Máy Giặt'])}
                {renderContent('checkbox')}
                {renderContent('price', priceOptions)}
                {renderContent('star', starRatings)}
            </WrapperContent>
        </div>
    );
};

export default NavbarComponent;
