import React, {FC, useEffect, useState} from 'react';
import {useGetCryptosQuery} from "../services/cryptoApi";
import {Card, Col, Input, Row} from "antd";
import {ICoin} from "../core/interfaces/ICoin";
import { Link } from 'react-router-dom';
import millify from "millify";

interface Props {
    simpified?: boolean
}
const Cryptocurrencies: FC<Props> = ({simpified}) => {
    const count = simpified ? 10 : 100;
    const { data: cryptoList, isFetching} = useGetCryptosQuery(count);
    const [ cryptos, setCryptos] = useState<ICoin[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('')
    useEffect(() => {
        const filteredData = cryptoList?.data?.coins.filter((coin: ICoin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData)
    }, [cryptoList, searchTerm])

    if(isFetching) return <p>Loading...</p>
    return (
        <>
            <div className="search-crypto">
                <Input placeholder="Search Cryptocurrencies" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos.length && cryptos?.map((currency: ICoin) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link  to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.id}. ${currency.name}`} hoverable
                                  extra={<img  className="crypto-image" src={currency.iconUrl}/>}
                            >
                                <p>Price: {millify(Number(currency.price))}</p>
                                <p>Market Cap: {millify(Number(currency.marketCap))}</p>
                                <p>Daily Change: {millify(Number(currency.change))}%</p>
                            </Card>
                        </Link>

                    </Col>
                ))}
            </Row>
        </>
    )
}


export default Cryptocurrencies;
