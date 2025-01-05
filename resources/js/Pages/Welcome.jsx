import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { Parallax } from "react-parallax";
import frontImage from "../../assets/frontImage.jpg";

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Home" />
            <div className="flex flex-col font-poppins font-bold sm:h-[600px] h-600px justify-between">
                <div className="flex w-full mt-24 sm:mt-40 tracking-[0.7em] text-gray-400">
                    <div className="flex flex-col gap-6 w-full">
                        <div className="flex ml-20 justify-start">
                            <div className="flex bg-[#35605A] pl-4">
                                Development with Laravel and React
                            </div>
                        </div>
                        <div className="flex justify-center mt-10 mr-20">
                            <div className="flex bg-[#35605A] pl-10  justify-center">
                                Integrity, Creativity and Innovation
                            </div>
                        </div>
                        <div className="flex justify-end ml-10 mt-10 items-center">
                            <div className="flex bg-[#35605A] pl-3 md:mr-20">
                                Committed growth and innovative solutions
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-10 sm:pt-0 w-full relative">
                    <Parallax
                        strength={300}
                        bgImage={frontImage}
                        className="h-40 w-40 rounded-full flex border-[#35605A] border-[4px] z-10 translate-y-20"
                    />
                </div>
            </div>
            <div className="mx-20">
                <div className="flex flex-col h-[700px] w-full relative pt-36 lg:bg-[url('../../resources/assets/laptop.jpg')] bg-contain lg:bg-cover bg-no-repeat rounded-xl">
                    <div className="flex  flex-col lg:mx-8 mt-8">
                        <div className="flex text-[#35605A] font-lexend font-black text-7xl justify-center">
                            Hello
                        </div>
                        <div className="flex text-gray-400 font-lexend font-black text-4xl justify-center mt-10">
                            I enjoy building things for the web
                        </div>
                        <div className="flex text-gray-400 font-lexend font-black text-4xl justify-center mt-10">
                            See the work
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
