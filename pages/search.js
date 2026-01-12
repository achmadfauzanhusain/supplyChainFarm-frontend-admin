import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

import { searchSupplier } from "@/services/supplier"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
    const [suppliers, setSuppliers] = useState([])
    const [loading, setLoading] = useState(false)

    // input
    const [supplierName, setSupplierName] = useState("")

    const router = useRouter()

    const searchSupplierName = async () => {
        try {
            setLoading(true)
            const data = { supplierName }
            const response = await searchSupplier(data)

            if (response?.error === true) {
                toast.error(response.message)
                setSuppliers([])
            } else {
                setSuppliers(response.data.data)
            }
        } finally {
            setLoading(false)
        }
    }

    const SkeletonCard = () => (
        <div className="animate-pulse bg-white/10 rounded-md px-4 py-6 flex flex-col gap-4">
            <div className="h-5 bg-gray-600 rounded w-3/4"></div>
            <div className="h-3 bg-gray-600 rounded w-1/2"></div>
            <div className="h-3 bg-gray-600 rounded w-2/3"></div>
            <div className="h-3 bg-gray-600 rounded w-full mt-4"></div>
        </div>
    )
    return (
        <div className="mt-10 md:mt-18 w-[95%] sm:w-[80%] lg:w-[90%] pb-14 mx-auto">
            <button className="cursor-pointer" onClick={() => router.back()}>
                <Image className="w-[25px] md:w-[30px]" src="/icon/back.png" width={30} height={0} alt="" />
            </button>

            <div className="flex items-end gap-2 sm:gap-3 mt-16">
                <input
                    className="text-white placeholder:text-gray-400 flex-1 text-sm px-4 py-3 border-b border-gray-600 outline-none"
                    placeholder="Enter supplier name"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                />

                <button onClick={searchSupplierName} className="px-2 sm:px-4 py-2 bg-[#0D6EFD] rounded-md">
                    <Image className="w-5 md:w-[25px]" src="/icon/search.png" width={30} height={0} alt="" />
                </button>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {loading
                    ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                    : suppliers.map((s) => (
                        <Link
                            key={s.ethWalletAddress}
                            href={`/confirm/${s.ethWalletAddress}`}
                            className="bg-[#BEE3F8]/25 hover:bg-[#0D6EFD] w-full px-3 sm:px-4 md:px-6 py-4 md:py-6 rounded-md flex flex-col gap-5 transition-all duration-300"
                        >
                            <div>
                                <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-words">
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
    )
}

export default Search