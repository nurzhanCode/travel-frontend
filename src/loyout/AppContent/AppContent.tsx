import {ReactNode} from "react";

export const AppContent = ({children}:{children: ReactNode}) => {
    return (
        <div
            className="app-container"
        >
            {children}
        </div>
    );

}
