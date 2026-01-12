import Image from "next/image"
import { useState, useEffect } from "react";
import { useRouter } from "next/router"

import { Urbanist } from "next/font/google"
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

import { detailSupplier, deleteSupplier } from "@/services/supplier";

import { BrowserProvider, Contract } from "ethers";
import config from "../../../config.json";
import SupplyChainNFT from "../../../abis/SupplyChainNFT.json";

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Supplier = ({ supplier }) => {
    const [contract, setContract] = useState(null);

    const router = useRouter()

    const loadBlockchainData = async () => {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xaa36a7" }], // 11155111 in hex
        })

        const provider = new BrowserProvider(window.ethereum)
        const network = await provider.getNetwork()
        const signer = await provider.getSigner()

        const supplyChainNFT = new Contract(
            config[network.chainId].SupplyChainNFT.address,
            SupplyChainNFT,
            signer
        )
        setContract(supplyChainNFT)
    }

    const removeFromSupplier = async () => {
        if(!contract) return;

        try {
            const tx = await contract.removeSupplier(supplier.ethWalletAddress)
            await tx.wait()
            if(!tx) {
                toast.error("Transaction failed!");
                return;
            }
            const response = await deleteSupplier({
                ethWalletAddress: supplier.ethWalletAddress
            })
            if(response?.error === true) {
                toast.error(response.message);
            } else {
                toast.success(response.data.message);
                router.push("/")
            }
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        loadBlockchainData()
    }, [])
    return (
        <>
        <div className="mt-10 md:mt-18 w-[95%] sm:w-[80%] lg:w-[90%] pb-14 mx-auto">
            <button className="cursor-pointer" onClick={() => router.back()}>
                <Image className="w-[25px] md:w-[30px]" src="/icon/back.png" width={30} height={0} alt="" />
            </button>

            <div className="mt-10 md:mt-14">
                <h1 className={`${urbanist.className} text-4xl md:text-5xl font-semibold`}>{supplier?.supplierName}</h1>
                <p className="text-sm md:text-base mt-1 opacity-75">{supplier?.origin}</p>
                <p className="text-sm md:text-base mt-1 opacity-75">{supplier?.status}</p>
            </div>

            <div className="mt-10 md:mt-14 flex flex-col md:flex-row gap-6 md:gap-14 w-[75%]">
                <div>
                    <p className="text-sm md:text-base opacity-75">ETH ADDRESS :</p>
                    <p className="text-sm font-semibold mt-2 wrap-break-word">{supplier?.ethWalletAddress}</p>
                </div>

                <div>
                    <p className="text-sm md:text-base opacity-75">EMAIL SUPPLIER :</p>
                    <p className="text-sm font-semibold mt-2 wrap-break-word">{supplier?.emailSupplier}</p>
                </div>
            </div>

            <div className="mt-10 md:mt-14">
                <p className="text-sm opacity-75">Supplier Description :</p>
                <p className="text-sm opacity-75 w-[90%] mt-2">
                    {supplier?.description}
                </p>
            </div>

            <div className="mt-8">
                <button 
                    onClick={removeFromSupplier}
                    className="w-full py-4 text-center bg-[#DA1D00] hover:bg-[#ab1700] rounded-sm cursor-pointer text-xs font-semibold transition-all duration-400">
                    Remove from supplier
                </button>
            </div>
        </div>
        </>
    )
}

export default Supplier

export async function getServerSideProps(context) {
    const { address } = context.query;
    const response = await detailSupplier(address);

    return {
        props: {
            supplier: response.data.data
        }
    };
}