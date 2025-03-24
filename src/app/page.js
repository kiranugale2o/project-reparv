import HeroSection from "@/Component/landing_page/HeroSection";
import JoinFormSection from "@/Component/landing_page/JoinFormSection";
import MarketReality from "@/Component/landing_page/MarketRealitySection";
import ProjectPartner from "@/Component/landing_page/ProjectPartner";
import SolutionSection from "@/Component/landing_page/SolutionSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full ">
      <HeroSection />
      <ProjectPartner />
      <MarketReality />
      <SolutionSection />
      <JoinFormSection />
    </div>
  );
}
