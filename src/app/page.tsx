import Navbar from "@/components/Navbar";
import Image from "next/image";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="font-roboto">
            <div className="bg-[#F7F7F7] rounded-2xl w-full p-2">
                <div id="hero" className="bg-[#F0EFEE] rounded-2xl border border-gray-300 flex flex-col overflow-hidden ">

                    <Navbar />
                    <div className="rounded-full w-40 h-40 bg-[#F7F7F7] relative mx-auto mt-28">

                        <Image src="/profile.jpeg" alt="Portrait image"
                           className="rounded-full p-1"
                           objectFit="cover"
                           layout="fill"
                           loading='lazy'
                           style={{ objectPosition: 'center 20%' }}
                        />
                    </div>
                    <div className='mt-10 w-fit mx-auto relative'>
                        <h1 className='text-center text-4xl font-semibold relative leading-10'>
                            <span className='block'>Building digital</span>
                            <span className='block'>products, brands, and</span>
                            <span className='block'>experience.</span>
                        </h1>
                            <div className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-[#F0EFEE]  to-transparent"></div>
                    </div>
                    <div className='mt-10 mx-auto lg:mb-36 mb-20'>
                        <button className="w-36 rounded-full px-8 py-4 text-nowrap text-center bg-black text-white font-normal text-sm
                        hover:underline decoration-white decoration-1 underline-offset-2">
                            Latest Work
                        </button>
                    </div>
                </div>
                <div className="bg-[#F7F7F7] rounded-2xl w-full h-fit lg:px-32 px-6">
                    <Logos />
                </div>

                <div className="bg-[#F0EFEE] rounded-2xl py-10 w-full border border-gray-300">
                    <div className='mt-10 mb-20 overflow-hidden lg:w-2/4 w-96 mx-auto relative'>
                        <h1 className='text-center leading-10 text-2xl font-medium relative'>
                            <span className='lg:block'>Collaborate with brands and agencies </span>
                            to create impactful results.
                        </h1>
                        <div
                            className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-[#F0EFEE]  to-transparent"></div>
                    </div>
                    <div className='lg:mx-24 mx-4'>
                        <div className='relative h-[1px] bg-gray-500'>
                            <span className='absolute py-2 px-4 left-1/2 -translate-x-1/2 -translate-y-5 z-10 bg-[#F7F7F7]
                             border border-gray-700 rounded-full -rotate-12'>Services</span>
                        </div>

                        <div className="grid lg:grid-cols-4 grid-cols-2 py-16 gap-3">
                            <div className='flex flex-col justify-start px-2 py-4 gap-y-4'>
                                <Image src='/ui.png' alt='UI logo'
                                       width={50}
                                       height={50}
                                       className=''
                                />
                                <h2 className='font-semibold'>
                                    UX & UI
                                </h2>
                                <p className='font-normal text-md'>
                                    Designing interfaces that are intuitive, effective, and enjoyable to use.
                                </p>
                            </div>

                            <div className='flex flex-col justify-start px-2 py-4 gap-y-3'>
                                <Image src='/mobile.png' alt='Web and Mobile logo'
                                       width={50}
                                       height={50}
                                       className='mb-2'
                                />
                                <h2 className='font-semibold'>
                                    Web & Mobile App
                                </h2>
                                <p className='font-normal text-md'>
                                    Transforming ideas into exceptional web and mobile app experiences.
                                </p>
                            </div>

                            <div className='flex flex-col justify-start px-2 py-4 gap-y-3'>
                                <Image src='/creatives.png' alt='Creative logo'
                                       width={50}
                                       height={50}
                                       className=''
                                />
                                <h2 className='font-semibold'>
                                    Design & Creative
                                </h2>
                                <p className='font-normal text-md'>
                                    Crafting visually stunning designs that connect with your audience.
                                </p>
                            </div>

                            <div className='flex flex-col justify-start px-2 py-4 gap-y-3'>
                                <Image src='/web.png' alt='Development logo'
                                       width={50}
                                       height={50}
                                       className=''
                                />
                                <h2 className='font-semibold'>
                                    Development
                                </h2>
                                <p className='font-normal text-md'>
                                    Bringing your vision to life with the latest technology and design trends.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='bg-[#F7F7F7] h-10 border-b-0 border-t-2 border-gray-300 rounded-tl-3xl rounded-tr-3xl w-full -translate-y-10'></div>

                <div className='bg-[#F7F7F7] flex flex-col mb-8 gap-8 rounded-3xl items-center'>
                    <div className='bg-[#F7F7F7] border border-gray-300 rounded-full'>
                        <Image src='/handshake.png' alt="Handshake"
                               width={100}
                               height={100}
                               className='rounded-full'
                        />
                    </div>

                    <div className='overflow-hidden lg:w-2/4 w-96 mx-auto relative'>
                        <h1 className='text-center leading-10 text-2xl font-semibold relative'>
                            <span className='block'>Tell me about your next </span>
                            project
                        </h1>
                        <div
                            className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-[#F7F7F7]  to-transparent"></div>
                    </div>

                    <div className="flex gap-x-6">
                        <button className="bg-black text-white rounded-full px-5 py-2 text-sm font-light hover:underline decoration-white decoration-1 underline-offset-2">
                            Email me
                        </button>
                        <button className="bg-[#F7F7F7] border border-gray-300 rounded-full px-5 py-2 text-normal font-light hover:underline decoration-black decoration-1 underline-offset-2">
                            Whatsapp
                        </button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
