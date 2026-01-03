import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BrowserProvider, Contract } from "ethers"
import config from "../config.json"
import SupplyChainNFT from "../abis/SupplyChainNFT.json"

export default function OwnerGuard({ children }) {
  const [checking, setChecking] = useState(true)

  const router = useRouter()

  const checkOwner = async () => {
    try {
      if (!window.ethereum) {
        router.replace("/blocked")
        return
      }

      const provider = new BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const network = await provider.getNetwork()

      const contract = new Contract(
        config[network.chainId].SupplyChainNFT.address,
        SupplyChainNFT,
        signer
      )

      const owner = await contract.owner()
      const userAddress = await signer.getAddress()

      if (owner.toLowerCase() !== userAddress.toLowerCase()) {
        router.replace("/blocked")
        return
      }

      setChecking(false)
    } catch (err) {
      router.replace("/blocked")
    }
  }

  useEffect(() => {
    if (router.pathname === "/blocked") {
      setChecking(false)
      return
    }

    // initial check
    checkOwner()

    // 🔥 LISTEN ACCOUNT CHANGE
    const handleAccountsChanged = (accounts) => {
      if (!accounts || accounts.length === 0) {
        router.replace("/blocked")
        return
      }

      // user ganti address → cek ulang owner
      setChecking(true)
      checkOwner()
    }

    window.ethereum?.on("accountsChanged", handleAccountsChanged)

    return () => {
      window.ethereum?.removeListener(
        "accountsChanged",
        handleAccountsChanged
      )
    }
  }, [router])

  if (checking) {
    return <p style={{ padding: 20 }}>Checking access...</p>
  }

  return children
}