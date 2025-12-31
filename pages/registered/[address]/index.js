import Image from "next/image"
import { useRouter } from "next/router"

import { Urbanist } from "next/font/google"

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const Supplier = () => {
    const router = useRouter()
    return (
        <>
        <div className="mt-10 md:mt-18 w-[95%] sm:w-[80%] lg:w-[90%] pb-14 mx-auto">
            <button className="cursor-pointer" onClick={() => router.back()}>
                <Image className="w-[25px] md:w-[30px]" src="/icon/back.png" width={30} height={0} alt="" />
            </button>

            <div className="mt-10 md:mt-14">
                <h1 className={`${urbanist.className} text-4xl md:text-5xl font-semibold`}>PT KOPI INDONESIA</h1>
                <p className="text-sm md:text-base mt-1 opacity-75">Toraja, Sulawesi Selatan</p>
            </div>

            <div className="mt-10 md:mt-14 flex flex-col md:flex-row gap-6 md:gap-14 w-[75%]">
                <div>
                    <p className="text-sm md:text-base opacity-75">ETH ADDRESS :</p>
                    <p className="text-sm font-semibold mt-2 wrap-break-word">07x4....6351</p>
                </div>

                <div>
                    <p className="text-sm md:text-base opacity-75">EMAIL SUPPLIER :</p>
                    <p className="text-sm font-semibold mt-2 wrap-break-word">kopiindonesia@gmail.com</p>
                </div>
            </div>

            <div className="mt-10 md:mt-14">
                <p className="text-sm opacity-75">Supplier Description :</p>
                <p className="text-sm opacity-75 w-[90%] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="mt-8">
                <button className="w-full py-4 text-center bg-[#DA1D00] hover:bg-[#ab1700] rounded-sm cursor-pointer text-xs font-semibold transition-all duration-400">
                    Remove from supplier
                </button>
            </div>
        </div>
        </>
    )
}

export default Supplier