import "@/styles/globals.css";
import Layout from "@/components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OwnerGuard from "@/components/OwnerGuard";

export default function App({ Component, pageProps }) {
  return (
    <OwnerGuard>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </OwnerGuard>
  )
}
