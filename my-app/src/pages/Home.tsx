import React, {FC} from 'react';
import {Col, Row, Typography} from 'antd';

const {Title} = Typography

interface Props {
}
const Home: FC<Props> = ({}) => {
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}>

                </Col>
            </Row>
        </>
    );
}

export default Home;
