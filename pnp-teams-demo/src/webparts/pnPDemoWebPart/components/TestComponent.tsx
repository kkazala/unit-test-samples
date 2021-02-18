import * as React from "react";
import { Carousel, Image, Loader } from '@fluentui/react-northstar';
export function TestComponent(props?) {
    const [loading, setLoading] = React.useState<boolean>(true);
    const imageAltTags = {
        ade: 'Portrait of Ade',
        elliot: 'Portrait of Elliot',
        molly: 'Portrait of Molly',
        nan: 'Portrait of Nan',
    }
    const carouselItems = [
        {
            key: 'ade',
            id: 'ade',
            content: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/ade.jpg"
                    fluid
                    alt={imageAltTags.ade}
                />
            ),
            thumbnail: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/ade.jpg"
                    fluid
                    alt={imageAltTags.ade}
                />
            ),
            'aria-label': imageAltTags.ade,
        },
        {
            key: 'elliot',
            id: 'elliot',
            content: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/elliot.jpg"
                    fluid
                    alt={imageAltTags.elliot}
                />
            ),
            thumbnail: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/elliot.jpg"
                    fluid
                    alt={imageAltTags.elliot}
                />
            ),
            'aria-label': imageAltTags.elliot,
        },
        {
            key: 'molly',
            id: 'molly',
            content: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/molly.png"
                    fluid
                    alt={imageAltTags.molly}
                />
            ),
            thumbnail: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/molly.png"
                    fluid
                    alt={imageAltTags.molly}
                />
            ),
            'aria-label': imageAltTags.molly,
        },
        {
            key: 'nan',
            id: 'nan',
            content: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/nan.jpg"
                    fluid
                    alt={imageAltTags.nan}
                />
            ),
            thumbnail: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/nan.jpg"
                    fluid
                    alt={imageAltTags.nan}
                />
            ),
            'aria-label': imageAltTags.nan,
        },
        {
            key: 'elliot1',
            id: 'elliot1',
            content: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/elliot.jpg"
                    fluid
                    alt={imageAltTags.elliot}
                />
            ),
            thumbnail: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/elliot.jpg"
                    fluid
                    alt={imageAltTags.elliot}
                />
            ),
            'aria-label': imageAltTags.elliot,
        },
        {
            key: 'ade1',
            id: 'ade1',
            content: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/large/ade.jpg"
                    fluid
                    alt={imageAltTags.ade}
                />
            ),
            thumbnail: (
                <Image
                    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/small/ade.jpg"
                    fluid
                    alt={imageAltTags.ade}
                />
            ),
            'aria-label': imageAltTags.ade,
        },
    ]

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    return <div>
        <div>
            {loading && <Loader />}
            {!loading && <Carousel
                ariaRoleDescription="carousel"
                ariaLabel="Portrait collection"
                thumbnails
                navigation={{
                    'aria-label': 'people portraits',
                    items: carouselItems.map((item, index) => ({
                        key: index,
                        'aria-controls': item.id,
                        'aria-label': item['aria-label'],
                        content: item.thumbnail,
                    })),
                }}
                items={carouselItems}
                getItemPositionText={(index, size) => `${index + 1} of ${size}`}
            />}
        </div>
    </div>;
}