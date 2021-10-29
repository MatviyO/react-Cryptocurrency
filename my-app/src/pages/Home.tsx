import React, {FC} from 'react';
import {Col, Row, Statistic, Typography} from 'antd';
import {useGetCryptosQuery} from "../services/cryptoApi";
import millify from "millify";

const {Title} = Typography

interface Props {
}
const Home: FC<Props> = ({}): JSX.Element => {
    const {data, isFetching } = useGetCryptosQuery(null);
    const globalStats = data?.data?.stats;

    if(isFetching) return <p>'Loading...'</p>
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarkerCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
        </>
    );
}

export default Home;
