import Property1Group179 from "./components/property1-group179";
import LocalizedBenefitsSection from "./components/localized-benefits-section";
import CompanyInfoSection from "./components/company-info-section";

const HelpCenter = () => {
  return (
    <div className="relative bg-white w-full h-[2593px] overflow-hidden text-left text-25xl text-white font-cta">
     {/*} <img
        className="absolute top-[0px] left-[0px] w-full h-[598px]"
        alt=""
        src="/rectangle-1.svg"
  />*/}
       <div className="absolute top-[0px] left-[0px] bg-cornflowerblue-100 w-full h-[598px]" />
      <img
        className="absolute top-[1401px] left-[40px] rounded-11xl w-[1360px] h-[433px]"
        alt=""
        src="/rectangle-91.svg"
      />
      <b className="absolute top-[286px] left-[40px]">
        How can i help you today?
      </b>
      <b className="absolute top-[1521px] left-[129px]">
        Talk to our experts to learn more.
      </b>
      <div className="absolute top-[0px] left-[0px] bg-midnightblue-200 w-full h-[58px]" />
      <Property1Group179
        property1Group179Position="absolute"
        property1Group179Top="77px"
        property1Group179Left="calc(50% - 680px)"
      />
      <div className="absolute top-[355px] left-[40px] rounded-lg bg-white w-[559px] h-[66px]" />
      <img
        className="absolute top-[377px] left-[56px] w-6 h-6 overflow-hidden"
        alt=""
        src="/bisearch.svg"
      />
      <img
        className="absolute top-[0px] left-[691px] w-[811px] h-[811px] overflow-hidden"
        alt=""
        src="/q-and-a-about-loan.svg"
      />
      <LocalizedBenefitsSection />
      <div className="absolute top-[1598px] left-[129px] w-[326px] h-[76px] text-lg">
        <div className="absolute top-[56px] left-[16px] bg-black [filter:blur(45px)] w-[310px] h-[19px]" />
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-royalblue-100 w-[326px] h-[76px]" />
        <div className="absolute top-[28px] left-[63px] leading-[19.6px] font-semibold">
          Get a free consultation
        </div>
      </div>
      <div className="absolute top-[1314px] left-[910px] w-[377px] h-[520px]">
        <div className="absolute top-[97px] left-[0px] rounded-tl-82xl-5 rounded-tr-none rounded-b-none bg-gold-200 w-[203px] h-[423px]" />
        <div className="absolute top-[264px] left-[377px] rounded-tl-82xl-5 rounded-tr-none rounded-b-none bg-royalblue-100 w-[174px] h-64 [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[calc(50%_-_260px)] left-[22px] w-[300.2px] h-[520px] object-cover"
          alt=""
          src="/pngwing-10@2x.png"
        />
      </div>
      <CompanyInfoSection propTop="1998px" />
    </div>
  );
};

export default HelpCenter;
