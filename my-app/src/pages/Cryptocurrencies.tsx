import React, {FC, useState} from 'react';
import {useGetCryptosQuery} from "../services/cryptoApi";
import {Col, Row} from "antd";
import {ICoin} from "../core/interfaces/ICoin";

interface Props {
    simpified?: boolean
}
const Cryptocurrencies: FC<Props> = ({simpified}) => {
    const { data: cryptoList, isFetching} = useGetCryptosQuery(null);
    const [ cryptos, setCryptos] = useState<ICoin[]>(cryptoList?.data?.coins);
    return (
        <>
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos.map((currency: ICoin) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>

                    </Col>
                ))}
            </Row>
        </>
    )
}


export default Cryptocurrencies;
