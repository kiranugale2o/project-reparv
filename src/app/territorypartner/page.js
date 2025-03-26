import MarketReality from "@/Component/project_partner/MarketRealitySection";
import TerritoryHeroSection from "@/Component/territory_partner/HeroSection";
import TerritoryJoinFormSection from "@/Component/territory_partner/TJoinSection";
import TerritoryPartnerMarketSection from "@/Component/territory_partner/TMarketReality";
import TerritorySolutionSection from "@/Component/territory_partner/TSolutionSection";
import TerritoryPartnerSection from "@/Component/territory_partner/TerritorypartnerSection";

export default function TerritoryPartner() {
  return (
    <div className="w-full m-0 p-0">
      <TerritoryHeroSection />
      <TerritoryPartnerSection />
      <TerritoryPartnerMarketSection />
      <TerritorySolutionSection />
      <TerritoryJoinFormSection />
    </div>
  );
}
