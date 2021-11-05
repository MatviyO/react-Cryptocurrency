export interface INews {
    url: string;
    name: string;
    description: string;
    image: {
        thumbnail: {
            contentUrl: string
        }
    }
    provider: [
        {
            image: {
                thumbnail: {
                    contentUrl: string
                }
            },
            name: string
        }
    ];
    datePublished: string;
}
