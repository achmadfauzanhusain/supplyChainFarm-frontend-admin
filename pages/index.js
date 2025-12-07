import Navbar from "@/components/navbar";
import { Urbanist } from "next/font/google"

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="px-8 mt-10 md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 border-b pb-14 md:pb-20">
          <div className={`${urbanist.className} w-full bg-[#0D6EFD] px-4 py-6 rounded-md`}>
            <p className="text-sm md:text-base font-bold">Supplier registered</p>
            <h3 className="text-2xl md:text-3xl font-[1000]">273.171</h3>
          </div>

          <div className={`${urbanist.className} w-full bg-[#38B2AC] px-4 py-6 rounded-md`}>
            <p className="text-sm md:text-base font-bold">Product/item minted</p>
            <h3 className="text-2xl md:text-3xl font-[1000]">2.872.098.853</h3>
          </div>
        </div>
      </div>
    </>
  );
}
