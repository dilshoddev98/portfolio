import {useContext} from "react";
import {ActiveSectionContext} from "@/context/active-section-context";

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext)

    if (!context) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
    }

    return context;
}