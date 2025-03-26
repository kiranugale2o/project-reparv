import HeroSection from "@/Component/project_partner/HeroSection";
import JoinFormSection from "@/Component/project_partner/JoinFormSection";
import MarketReality from "@/Component/project_partner/MarketRealitySection";
import ProjectPartner from "@/Component/project_partner/ProjectPartner";
import SolutionSection from "@/Component/project_partner/SolutionSection";
import Image from "next/image";
import ProjectPartnerPage from "./projectpartner/page";
import TerritoryPartner from "./territorypartner/page";

export default function Home() {
  return (
    <div className="w-full m-0 p-0 ">
      <TerritoryPartner />
    </div>
  );
}
