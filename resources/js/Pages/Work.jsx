import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Work() {
    return (
        <GuestLayout>
            <Head title="Work" />
            <div className="grid grid-cols-2 md:grid-cols-3 bg-[url('../../resources/assets/laptop.jpg')] sm:bg-cover bg-no-repeat h-[700px] border-[1px] border-gray-400 mx-10 lg:mx-36 mt-28">
                <div className="flex text-white border-[1px] border-gray-400 bg-[url('../../resources/assets/vintage.png')] w-full bg-center bg-contain bg-no-repeat h-100" />
                <div className="flex text-white border-[1px] border-gray-400 bg-[url('../../resources/assets/reading.png')] w-full bg-center bg-contain bg-no-repeat h-100" />
                <div className="flex text-white border-[1px] border-gray-400 bg-[url('../../resources/assets/relax.png')] w-full bg-center bg-contain bg-no-repeat h-100" />
                <div className="flex text-white border-[1px] border-gray-400 bg-[url('../../resources/assets/street.png')] w-full bg-center bg-contain bg-no-repeat h-100" />
                <div className="flex text-white border-[1px] border-gray-400 bg-[url('../../resources/assets/shopping.png')] w-full bg-center bg-contain bg-no-repeat h-100" />
                <div className="flex text-white border-[1px] border-gray-400 bg-[url('../../resources/assets/basketball.png')] w-full bg-center bg-contain bg-no-repeat h-100" />
            </div>
        </GuestLayout>
    );
}
