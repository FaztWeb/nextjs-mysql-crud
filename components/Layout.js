import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
export function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto">{children}</div>
      </div>
      <Toaster />
    </>
  );
}
