import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Navbar from "@/components/navbar";
import { Urbanist } from "next/font/google"

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const Registered = () => {
    const router = useRouter()
    return (
        <>
            <div className="mt-10 md:mt-18 px-5 md:px-8 lg:px-18">
                <button className="cursor-pointer" onClick={() => router.back()}>
                    <Image className="w-[25px] md:w-[30px]" src="/icon/back.png" width={30} height={0} alt="" />
                </button>

                <div className="mt-8">
                    <h1 className={`${urbanist.className} text-3xl md:text-4xl lg:text-5xl font-semibold`}>Registered</h1>
                    <p className="text-xs sm:text-sm md:text-base mt-2 opacity-75">who are already registered</p>
                </div>

                <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2">
                    <Link href="/registered/07x4....6351" className="bg-[#BEE3F8]/25 hover:bg-[#0D6EFD] w-full px-3 sm:px-4 md:px-6 py-4 md:py-6 rounded-md flex flex-col gap-5 transition-all duration-300">
                        <div>
                            <h2 className="text-base sm:text-xl md:text-2xl font-semibold wrap-break-word">PT KOPI INDONESIA</h2>
                            <p className="text-xs md:text-sm">Toraja, Sulawesi Selatan</p>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm">07x4....6351</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Registered;