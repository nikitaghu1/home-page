import ContainerCardFormFilter from "./container-card-form-filter";

const ContainerFrame2 = () => {
  return (
    <div className="absolute top-[1980px] left-[39px] w-[1362px] h-[555px] overflow-hidden text-right text-13xl text-darkslategray-500 font-cta">
      <div className="absolute top-[0px] left-[10px] w-[1352px] h-[555px] overflow-hidden">
        <div className="absolute top-[104px] left-[calc(50%_+_12px)] font-semibold flex items-center w-[664px]">
          A single platform, limitless opportunities.
        </div>
        <div className="absolute top-[165px] left-[688px] text-3xl text-darkslategray-300 flex items-center w-[664px]">
          Lorem ipsum dolor sit amet consectetur. Nunc lobortis fermentum
          egestas lacinia tortor odio erat quis. Nec senectus sed pellentesque
          dictum mi. Sit cras mus arcu eu aliquam morbi.
        </div>
        <ContainerCardFormFilter
          dimensionLabel="/group-2001.svg"
          imageLabel="/group-2001.svg"
          imageCode="/group-2001.svg"
          propTop="295px"
          propLeft="942px"
        />
        <div className="absolute top-[0px] left-[0px] rounded-[21.02px] w-[466px] h-[372.1px] bg-[url('/rectangle-42@2x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[248px] left-[270px] rounded-tl-21xl rounded-tr-none rounded-b-none bg-white w-[196px] h-[124px]" />
        </div>
        <img
          className="absolute top-[257px] left-[279px] rounded-11xl w-[373.2px] h-[298px] object-cover"
          alt=""
          src="/rectangle-43@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerFrame2;
