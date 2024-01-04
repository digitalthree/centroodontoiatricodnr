"use client"
import CarouselHome from "./components/carousel/CarouselHome"
import slide1Img from "../../public/img/slide-1-img.png"
import slide2Img from "../../public/img/slide-2-img.png"
import slide3Img from "../../public/img/slide-3-img.png"
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <CarouselHome items={[{
                image: slide1Img,
                backgroundImage: "",
                cardButtonLink: "",
                cardButtonText: "Click Me!",
                cardDescription: "Lore imifasbbfa bdubuda advavdua dabv",
                cardTitle: "Il tuo sorriso con noi"
            },
                {
                    image: slide2Img,
                    backgroundImage: "",
                    cardButtonLink: "",
                    cardButtonText: "Click Me!",
                    cardDescription: "Lore imifasbbfa bdubuda advavdua dabv",
                    cardTitle: "Qualità & Affidabilità"
                },
                {
                    image: slide3Img,
                    backgroundImage: "",
                    cardButtonLink: "",
                    cardButtonText: "Click Me!",
                    cardDescription: "Lore imifasbbfa bdubuda advavdua dabv",
                    cardTitle: "Impianti Dentali"
                }
            ]}/>
        </main>
    )
}
