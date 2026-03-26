import { PROTECTED_ROUTES } from "@/routes/common/routePath"
import { WalletCards } from "lucide-react"
import { Link } from "react-router-dom"

const Logo = (props: { url?: string }) => {
  return (
    <Link to={props.url || PROTECTED_ROUTES.OVERVIEW} className="flex items-center gap-2">
    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
    <WalletCards className="size-4" />
    </div>
    <span className="text-lg font-semibold tracking-tight">Spendly</span>
  </Link>
  )
}

export default Logo
