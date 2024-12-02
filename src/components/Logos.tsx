"use client";

import Image from "next/image";

const logos = [
    "/starbucks.png",
    "/amazon.png",
    "/pepsi-logo.png",
    "/cat.png",
    "/openai1.png",
];

const Logos = () => {
    return (
        <div className="flex flex-wrap justify-between lg:justify-center items-center py-10 lg:gap-x-36 gap-8">
            {logos.map((logo, index) => (
                <Image
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={120}
                    height={120}
                    loading='lazy'
                    className="grayscale object-contain h-auto mx-auto"
                />
            ))}
        </div>
    );
};

export default Logos;
