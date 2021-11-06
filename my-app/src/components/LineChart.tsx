import React, {FC} from 'react';
import {Col, Row, Typography} from "antd";
import {Line} from "react-chartjs-2";
import {ChartOptions} from "chart.js";

const { Title, Text} = Typography
interface Props {
    currentPrice: string;
    coinName: string;
    coinHistory: any;
}

const LineChart: FC<Props> = ({currentPrice, coinHistory, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {label: 'Price in USD', data: coinPrice, fill: false, backgroundColor: '#0071bd', borderColor: '#0071bd'}
        ]
    }

    // const options: ChartOptions = {
    //     scales: {
    //         yAxes: [
    //             {
    //                 ticks: {
    //                     beginAtZero: true,
    //                 },
    //             },
    //         ],
    //     },
    // };

    return (
        <>
            <Row>
                <Title level={2} className="chart-title">{coinName}</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change" >{coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice} </Title>
                </Col>

            </Row>
            <Line data={data}
                  // options={options}
            />
        </>
    );
};

export default LineChart;
