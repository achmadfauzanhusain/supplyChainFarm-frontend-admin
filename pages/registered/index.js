import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Urbanist } from "next/font/google"
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import { registeredSuppliers } from "@/services/supplier";

const Registered = () => {
    const [suppliers, setSuppliers] = useState([])
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await registeredSuppliers()
                setSuppliers(response.data.data)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const SkeletonCard = () => (
        <div className="animate-pulse bg-white/10 rounded-md px-3 sm:px-4 md:px-6 py-4 md:py-6 flex flex-col gap-5">
            <div>
                <div className="h-5 bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2 mt-2"></div>
                <div className="h-3 bg-gray-600 rounded w-2/3 mt-1"></div>
            </div>
            <div className="h-3 bg-gray-600 rounded w-full"></div>
        </div>
    )

    return (
        <>
            <div className="mt-10 md:mt-18 px-5 md:px-8 lg:px-18">
                <button className="cursor-pointer" onClick={() => router.back()}>
                    <Image className="w-[25px] md:w-[30px]" src="/icon/back.png" width={30} height={0} alt="" />
                </button>

                <div className="mt-8">
                    <h1 className={`${urbanist.className} text-3xl md:text-4xl lg:text-5xl font-semibold`}>Registered</h1>
                    <p className="text-xs sm:text-sm md:text-base mt-2 opacity-75">
                        who are already registered
                    </p>
                </div>

                <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {loading
                        ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                        : suppliers.map((s) => (
                            <Link
                                key={s.ethWalletAddress}
                                href={`/registered/${s.ethWalletAddress}`}
                                className="bg-[#BEE3F8]/25 hover:bg-[#0D6EFD] w-full px-3 sm:px-4 md:px-6 py-4 md:py-6 rounded-md flex flex-col gap-5 transition-all duration-300"
                            >
                                <div>
                                    <h2 className="text-base sm:text-xl md:text-2xl font-semibold wrap-break-word">
                                        {s.supplierName}
                                    </h2>
                                    <p className="text-xs md:text-sm">{s.origin}</p>
                                    <p className="text-xs md:text-sm">{s.status}</p>
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm">{s.ethWalletAddress}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Registered;