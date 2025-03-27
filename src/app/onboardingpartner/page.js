import OnboardingHeroSection from "@/Component/onboarding_partner/HeroSection";
import OnboardingJoinFormSection from "@/Component/onboarding_partner/OnboardingJoinForm";
import OnboardingMarketReality from "@/Component/onboarding_partner/OnboardingMarket";
import OnboardingSolutionSection from "@/Component/onboarding_partner/OnboardingSolution";

export default function OnboardingPage() {
  return (
    <div className="w-full m-0 p-0 ">
      <OnboardingHeroSection />
      <OnboardingMarketReality />
      <OnboardingSolutionSection />
      <OnboardingJoinFormSection />
    </div>
  );
}
