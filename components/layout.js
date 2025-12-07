import Head from 'next/head'
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>TBLO Admin</title>
            </Head>
            <main className={`${poppins.className} px-2 sm:px-4 md:px-12 lg:px-20 mt-8 mx-auto`}>{children}</main>
        </>
    )
}

export default Layout;