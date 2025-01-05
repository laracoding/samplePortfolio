import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaTiktok,
} from "react-icons/fa6";

export default function About() {
    return (
        <GuestLayout>
            <Head title="About" />
            <div className="grid grid-cols-2 md:grid-cols-3 justify-center  text-8xl text-gray-600 h-[500px] mt-40 md:mt-60">
                <div className="flex justify-center">
                    <FaInstagram />
                </div>
                <div className="flex justify-center">
                    <FaFacebook />
                </div>
                <div className="flex justify-center">
                    <FaTwitter />
                </div>
                <div className="flex justify-center">
                    <FaYoutube />
                </div>
                <div className="flex justify-center">
                    <FaLinkedin />
                </div>
                <div className="flex justify-center">
                    <FaTiktok />
                </div>
            </div>
            ;
        </GuestLayout>
    );
}
