import React, {FC} from 'react';
import { Row, Typography } from "antd";

const { Title, Text} = Typography
interface Props {
    currentPrice: string;
    coinName: string;
    coinHistory: any;
}

const LineChart: FC<Props> = ({currentPrice, coinHistory, coinName}) => {
    return (
        <>
            <Row>
                <Title level={2} className={}>

                </Title>
            </Row>
        </>
    );
};

export default LineChart;
