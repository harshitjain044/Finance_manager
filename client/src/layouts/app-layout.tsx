import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";
import EditTransactionDrawer from "@/components/transaction/edit-transaction-drawer";

const AppLayout = () => {
  return (
    <>
    <div className="min-h-screen pb-10">
      <Navbar />
      <main className="w-full max-w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
    <EditTransactionDrawer />
    </>
  );
};

export default AppLayout;
