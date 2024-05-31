import { Row } from "antd"
import styled from "styled-components"

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(26,148,255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`

export const WrapperTextHeader = styled.span`
font-size: 18px;
color: #fff;
font-weight: bold;
text-align: left;
align-items: center;
`

export const WrapperHeaderAccount = styled.div`
display: flex;
align-items: center;
color: #fff;
font-weight: bold;
margin-left: 10px;
gap: 5px;
.CustomUserIcon {
    font-size: 30px;
}
`

export const WrapperTextHeaderSmall = styled.span`
font-size: 12px;
color: #fff;
font-weight: bold;
white-space: nowrap;
`

