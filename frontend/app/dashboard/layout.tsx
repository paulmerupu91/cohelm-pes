import { DashboardProvider } from "@/context/dashboard-context";
import { Toaster } from "react-hot-toast";

export default function PriorAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardProvider>
            <div className="w-full max-w-6xl mx-auto">
                <Toaster />
                {children}
            </div>
        </DashboardProvider>
    );
}