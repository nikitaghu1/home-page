import ContainerFrame from "./container-frame";

const PlatformContainer = () => {
  return (
    <div className="absolute top-[2650px]  w-full h-[695px] overflow-hidden text-left text-13xl text-darkslategray-500 font-cta">
      <div className="absolute top-[0px] ] bg-ghostwhite-300 w-full h-[695px] overflow-hidden">
        <div className="absolute top-[48px] left-[calc(50%_-_278px)] font-semibold">
          One platform, boundless possibilities.
        </div>
        <ContainerFrame
          featureDescription="Hire anywhere, without a subsidiary"
          employmentOptions="Hire whoever you want and let your team be employed by our legal entities in 160 countries."
          imageAltText="/frame-339.svg"
          featureTitle="Create local employment contracts"
          contractDescription="Send and sign locally compliant contracts in seconds and onboard your new hires instantly."
          imageDimensions="/group-341.svg"
          featureSubtitle="Manage taxes, social contributions"
          complianceMessage="We deduct the right taxes, pensions and other fees so you stay compliant with local laws."
          imageDescription="/group-343.svg"
        />
        <ContainerFrame
          featureDescription="Manage employee documentation"
          employmentOptions="We handle visas, work permits and more for your global talent and their dependents."
          imageAltText="/group-3491.svg"
          featureTitle="Simplify more than just payroll"
          contractDescription="Pick competitive benefits, manage PTO, view timesheets and get 24/7 support."
          imageDimensions="/group-347.svg"
          featureSubtitle="Pay your global team in one click"
          complianceMessage="Run global payroll with 0 effort. Pay everyone in their local currency in one bulk payment."
          imageDescription="/group-345.svg"
          propTop="402px"
          propLeft="929px"
          propLeft1="39px"
          propTextAlign="center"
          propBorderRadius="unset"
          propLeft2="55px"
          propTextAlign1="center"
          propLeft3="137px"
          propLeft4="0px"
          propTop1="30px"
          propHeight="194px"
          propHeight1="82px"
          propLeft5="45px"
          propTextAlign2="center"
          propTop2="44px"
        />
      </div>
    </div>
  );
};

export default PlatformContainer;
