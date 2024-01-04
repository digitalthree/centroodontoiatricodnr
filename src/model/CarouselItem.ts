import {StaticImageData} from "next/image";

export interface CarouselItem {
    cardTitle: string,
    cardDescription: string,
    cardButtonText: string,
    cardButtonLink: string,
    backgroundImage: string,
    image: string | StaticImageData
}