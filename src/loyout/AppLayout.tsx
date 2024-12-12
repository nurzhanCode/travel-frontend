import {ReactNode} from "react";
import {AppContent} from "./AppContent/AppContent.tsx";

type AppLayoutProps = {
    children: ReactNode;
}
export const AppLayout = ({children}:AppLayoutProps) => {
    return(<div>
        <AppHeader/>
        <AppContent>
            {children}
        </AppContent>
        <AppFooter/>
    </div>)
}
