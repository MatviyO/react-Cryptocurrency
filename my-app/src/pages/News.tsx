import React, {FC, useState} from 'react';
import {useGetCryptoNewsQuery} from "../services/cryptoNewsApi";
import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import moment from "moment";
import {useGetCryptosQuery} from "../services/cryptoApi";
import {ICoin} from "../core/interfaces/ICoin";
import {INews} from "../core/interfaces/INews";
const  {Title, Text} = Typography;
const {Option} = Select

const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmSWpqf-ULhQKR7QGeMRO0VTuPVIx2wH_EgO9Sg5HANrRXndnfNwy3RW4jYTYtGUIyWs&usqp=CAU'

interface Props {
    simpified?: boolean
}

const News: FC<Props> = ({simpified}) => {
    const [newsCategory, setNewsCategory] = useState<string>('Cryptocurrency')
    const {data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory, count: simpified ? 6 : 12})
    const { data: cryptoList } = useGetCryptosQuery(100);
    if ( !cryptoNews?.value) return <p>Loading...</p>

    return (
        <Row gutter={[24, 24]}>
            {!simpified && (
                <Col span={24}>
                    <Select
                        showSearch className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value: string) => setNewsCategory(value)}
                        filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {cryptoList?.data?.coins.map((coin: ICoin) => (
                            <Option value={coin.name}>{coin.name}</Option>
                        ))}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news: INews, index: number) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                    <Card  hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || defaultImage} alt={news.name}/>
                            </div>
                                <p>
                                    {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : `${news.description}`}
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || defaultImage} alt={news.name}/>
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('s').fromNow()}</Text>
                                </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default News;
