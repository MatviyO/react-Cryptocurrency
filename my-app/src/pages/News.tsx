import React, {FC} from 'react';
import {useGetCryptoNewsQuery} from "../services/cryptoNewsApi";
import {Card, Col, Row} from "antd";
import Title from 'antd/lib/typography/Title';

const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmSWpqf-ULhQKR7QGeMRO0VTuPVIx2wH_EgO9Sg5HANrRXndnfNwy3RW4jYTYtGUIyWs&usqp=CAU'

interface Props {
    simpified?: boolean
}

const News: FC<Props> = ({simpified}) => {
    const {data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simpified ? 6 : 12})

    if ( !cryptoNews.value) return <p>Loading...</p>

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((news: any, index: number) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                    <Card  hoverable className="news-card">
                        <a href="" target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl || defaultImage} alt={news.name}/>
                                <p>
                                    {news.description > 100 ? `${news.description.subscring(0, 100)}...` : `${news.description}`}
                                </p>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default News;
