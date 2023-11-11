import CountryFilterForm from "./country-filter-form";

const CountryHireCard = () => {
  return (
    <div className="absolute top-[4625px] left-[63px] w-[1314px] h-[269px] overflow-hidden text-left text-5xl text-white font-cta">
      <div className="absolute top-[0px] left-[0px] w-[1305px] h-[269px] overflow-hidden">
        <CountryFilterForm propTop="0px" propLeft="4px" />
        <div className="absolute top-[235px] left-[0px] leading-[33.6px] font-extrabold flex items-center w-[269px]">
          Onboard
        </div>
      </div>
    </div>
  );
};

export default CountryHireCard;
