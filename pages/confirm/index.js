import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Navbar from "@/components/navbar";
import { Urbanist } from "next/font/google"

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const Confirm = () => {
    const router = useRouter() 
    return (
        <>
            <Navbar />
            <div className="mt-8 md:mt-10 px-5 md:px-8 lg:px-18">
                <button className="cursor-pointer" onClick={() => router.back()}>
                    <Image className="w-[25px] md:w-[30px]" src="/icon/back.png" width={30} height={0} alt="" />
                </button>

                <div className="mt-8">
                    <h1 className={`${urbanist.className} text-3xl sm:text-4xl md:text-5xl font-semibold`}>Confirmation</h1>
                    <p className="text-xs sm:text-sm md:text-base mt-2 opacity-75">Confirmation of accounts that will <br /> become suppliers</p>
                </div>

                <div className="mt-8 md:mt-10 grid grid-cols-2">
                    <Link href="/confirm/07x4....6351" className="bg-[#BEE3F8]/25 hover:bg-[#0D6EFD] w-full px-3 sm:px-4 md:px-6 py-4 md:py-6 rounded-md flex flex-col gap-5 transition-all duration-300">
                        <div>
                            <h2 className="text-base sm:text-2xl md:text-3xl font-semibold">PT SAMPOERNA</h2>
                            <p className="text-xs md:text-sm">Karawang, Jawa Barat</p>
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

export default Confirm