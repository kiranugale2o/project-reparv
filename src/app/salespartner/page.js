import SolutionSection from "@/Component/project_partner/SolutionSection";
import SalesHeroSection from "@/Component/sales_partner/HeroSection";
import SalesJoinForm from "@/Component/sales_partner/JoinForm";
import MarketCardSection from "@/Component/sales_partner/MarketCardSection";
import SaleSolutionSection from "@/Component/sales_partner/SalesSolutionSection";

export default function SalesPartner() {
  return (
    <div className="w-full m-0 p-0 ">
      <SalesHeroSection />
      <MarketCardSection />
      <SaleSolutionSection />
      <SalesJoinForm />
    </div>
  );
}
