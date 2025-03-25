import HeroSection from "@/Component/project_partner/HeroSection";
import JoinFormSection from "@/Component/project_partner/JoinFormSection";
import MarketReality from "@/Component/project_partner/MarketRealitySection";
import ProjectPartner from "@/Component/project_partner/ProjectPartner";
import SolutionSection from "@/Component/project_partner/SolutionSection";

export default function ProjectPartnerPage() {
  return (
    <div className="w-full m-0 p-0 ">
      <HeroSection />
      <ProjectPartner />
      <MarketReality />
      <SolutionSection />
      <JoinFormSection />
    </div>
  );
}
