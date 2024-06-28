import { DashboardProvider } from "@/context/dashboard-context";
import { Toaster } from "react-hot-toast";

export default function PriorAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <DashboardProvider>
            <div className="w-full mx-auto min-h-full">
                <Toaster />
                {children}
            </div>
        </DashboardProvider>
    );
}