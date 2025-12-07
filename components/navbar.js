import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center px-8 md:py-3">
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-[1000]">TBLOADMIN</h1>

        {/* Desktop Menu */}
        <div className={`${urbanist.className} hidden md:flex items-center gap-10 text-base`}>
          <Link href="/confirm" className="cursor-pointer hover:opacity-75 transition-all duration-300">
            Confirm
          </Link>

          <Link href="/registered" className="cursor-pointer hover:opacity-75 transition-all duration-300">
            Registered
          </Link>

          {/* Register Button */}
          {/* <Link href="/register" className="relative cursor-pointer transition-all duration-300 px-6 py-2 rounded-lg text-white 
                     bg-linear-to-r from-[#0D6EFD] to-blue-600
                     shadow-inner overflow-hidden
                     hover:from-blue-400 hover:to-blue-500
                     inset-shadow-sm inset-shadow-white/5"
          >
            <span className="relative z-10">Register</span>
            <span className="absolute inset-0 bg-white opacity-20 blur-md translate-x-3 translate-y-3 rounded-lg"></span>
          </Link> */}
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="cursor-pointer">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full w-3/5 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-3/5 backdrop-blur-md bg-black/50 shadow-lg 
                    transition-transform duration-300 z-40
                    ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <X size={26} />
          </button>
        </div>

        {/* Drawer Menu */}
        <div className="flex flex-col px-8 pt-4 gap-6 text-base font-semibold">
          <Link href="/confirm" className="p-2 rounded-lg hover:bg-white/20" onClick={() => setIsOpen(false)}>
            Confirm
          </Link>

          <Link href="/registered" className="p-2 rounded-lg hover:bg-white/20" onClick={() => setIsOpen(false)}>
            Registered
          </Link>

          {/* <Link href="/register" className="p-2 rounded-lg hover:bg-white/20" onClick={() => setIsOpen(false)}>
            Register
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;