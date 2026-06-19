"use client"

import Image from "next/image"
import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
  { src: "/carrossel/1.jpg", alt: "Sua obra começa aqui" },
  { src: "/carrossel/2.jpg", alt: "Melhores tintas" },
  { src: "/carrossel/3.jpg", alt: "Promoção mês dos pais" },
]

export default function Carrossel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  )

  return (
    <section className="hidden md:block w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full relative"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent>
          {carrosselImagens.map((imagem, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200" />

        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200" />
      </Carousel>
    </section>
  )
}