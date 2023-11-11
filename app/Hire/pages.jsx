import SectionCard from "./components/section-card";
import BorderlessHireCard from "./components/borderless-hire-card";
import ContainerFrame1 from "./components/container-frame1";
import RegulatoryRequirementsContaine from "../components/regulatory-requirements-containe";
import ContainerFrame2 from "./components/container-frame2";
import PlatformContainer from "./components/platform-container";
import FormContainer7 from "./components/form-container7";
import CountryHireCard from "./components/country-hire-card";
import InternationalTeamCompliantFram from "./components/international-team-compliant-fram";

const Pages = () => {
  return (
    <div className="relative bg-white w-full h-[6260px] overflow-hidden text-center text-13xl text-darkslategray-300 font-cta">
      <div className="absolute top-[58px] left-[0px] bg-gainsboro-500 w-[1440px] h-[97px] hidden" />
      <div className="absolute top-[3445px] left-[314px] w-[812px] h-[39px] overflow-hidden text-midnightblue-300">
        <div className="absolute top-[0px] left-[calc(50%_-_401px)] font-semibold">
          The preferred choice of leading global organizations
        </div>
      </div>
      <div className="absolute top-[853px] left-[261px] w-[918px] h-[81px] overflow-hidden text-3xl">
        <div className="absolute top-[0px] left-[0px] flex items-center justify-center w-[888px]">
          Lorem ipsum dolor sit amet consectetur. Nunc lobortis fermentum
          egestas lacinia tortor odio erat quis. Nec senectus sed pellentesque
          dictum mi. Sit cras mus arcu eu aliquam morbi.
        </div>
      </div>
      <div className="absolute top-[4459px] left-[calc(50%_-_252px)] font-semibold text-darkslategray-500">
        <p className="m-0">Global hiring can be challenging.</p>
        <p className="m-0">Not when you work with us!</p>
      </div>
      <SectionCard
        dimensionCode="/phinstagramlogothin.svg"
        dimensionCodeImageUrl="/rilinkedinboxfill.svg"
      />
      <img
        className="absolute top-[3552px] left-[406px] w-[628px] h-[136px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <BorderlessHireCard />
      <ContainerFrame1 />
      <div className="absolute top-[1149px] left-[52px] w-[1336px] h-[61px] overflow-hidden text-base">
        <div className="absolute top-[4px] left-[0px] flex items-center justify-center w-[374px]">
          Lorem ipsum dolor sit amet consectetur. Nunc lobortis fermentum
          egestas lacinia tortor odio erat quis.
        </div>
        <div className="absolute top-[4px] left-[calc(50%_-_187px)] flex items-center justify-center w-[374px]">
          Lorem ipsum dolor sit amet consectetur. Nunc lobortis fermentum
          egestas lacinia tortor odio erat quis.
        </div>
        <div className="absolute top-[0px] left-[962px] flex items-center justify-center w-[374px]">
          Lorem ipsum dolor sit amet consectetur. Nunc lobortis fermentum
          egestas lacinia tortor odio erat quis.
        </div>
      </div>
      <RegulatoryRequirementsContaine />
      <ContainerFrame2 />
      <PlatformContainer />
      <FormContainer7 />
      <div className="absolute top-[4246px] left-[282px] w-[876px] h-28 overflow-hidden text-lg text-darkslateblue-200">
        <div className="absolute top-[0px] left-[101px] w-[775px] h-28 overflow-hidden">
          <div className="absolute top-[2px] left-[426px] w-[349px] h-[108px]">
            <div className="absolute top-[50px] left-[1px] rounded-t-lg rounded-b-none bg-mediumseagreen-200 w-[348px] h-9" />
            <div className="absolute top-[86px] left-[calc(50%_-_174.5px)] tracking-[0.17px] font-semibold">
              countries running global payroll with us
            </div>
            <b className="absolute top-[0px] left-[128px] text-[69.06px] uppercase text-left">
              8+
            </b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[348px] h-28">
            <div className="absolute top-[94px] left-[calc(50%_-_174px)] tracking-[0.17px] leading-[18px] font-semibold flex items-center justify-center w-[348px] h-[18px]">
              hours saved monthly on payroll admin
            </div>
            <div className="absolute top-[56px] left-[8px] rounded-t-3xl rounded-b-none bg-royalblue-100 w-[332px] h-9" />
            <b className="absolute top-[0px] left-[76px] text-[71.88px] leading-[96px] uppercase text-left">
              300+
            </b>
          </div>
        </div>
      </div>
      <CountryHireCard />
      <div className="absolute top-[5005px] left-[63px] w-[1314px] h-[55px] overflow-hidden text-darkslategray-500">
        <div className="absolute top-[0px] left-[0px] w-[1237px] h-[55px] overflow-hidden">
          <div className="absolute top-[16px] left-[calc(50%_-_541.5px)] font-semibold">
            All your global team management needs, consolidated on a single
            platform.
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-9xs box-border w-40 h-[41px] text-left text-base text-white border-[0.5px] border-solid border-silver">
            <div className="absolute top-[9px] left-[19px] w-[122px] h-[23px]">
              <div className="absolute top-[2px] left-[0px] capitalize font-medium">
                Learn More
              </div>
              <img
                className="absolute top-[0px] left-[99px] w-[23px] h-[23px] overflow-hidden"
                alt=""
                src="/arrowright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <InternationalTeamCompliantFram />
    </div>
  );
};

export default Hirenew;
