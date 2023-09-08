import { useContext } from "react";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";

export default function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error (
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }

  return context
}
