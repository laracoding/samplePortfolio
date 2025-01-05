import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <>
            <div className="flex flex-col sm:justify-around sm:flex-row py-2 bg-black items-center">
                <div className="flex">
                    <Link href="/">
                        <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <div className="flex justify-center flex-1 overflow-hidden px-6 py-3 sm:py-1 mt-6 sm:mt-0 shadow-md sm:max-w-md bg-black text-white">
                    <ul className="flex flex-1 flex-col sm:flex-row sm:justify-between sm:mx-4 gap-2 sm:gap-0 underline underline-offset-8 decoration-[#35605A] decoration-2">
                        <Link href="/" className="hover:scale-125">
                            <li>Home</li>
                        </Link>
                        <Link className="hover:scale-125" href="/work">
                            <li>Work</li>
                        </Link>
                        <Link className="hover:scale-125" href="/about">
                            <li>About</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div>{children}</div>
        </>
    );
}
