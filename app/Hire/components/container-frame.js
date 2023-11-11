import { useMemo } from "react";

const ContainerFrame = ({
  featureDescription,
  employmentOptions,
  imageAltText,
  featureTitle,
  contractDescription,
  imageDimensions,
  featureSubtitle,
  complianceMessage,
  imageDescription,
  propTop,
  propLeft,
  propLeft1,
  propTextAlign,
  propBorderRadius,
  propLeft2,
  propTextAlign1,
  propLeft3,
  propLeft4,
  propTop1,
  propHeight,
  propHeight1,
  propLeft5,
  propTextAlign2,
  propTop2,
}) => {
  const frameStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const hireAnywhereWithoutStyle = useMemo(() => {
    return {
      left: propLeft1,
      textAlign: propTextAlign,
    };
  }, [propLeft1, propTextAlign]);

  const frameIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const createLocalEmploymentStyle = useMemo(() => {
    return {
      left: propLeft2,
      textAlign: propTextAlign1,
    };
  }, [propLeft2, propTextAlign1]);

  const groupIconStyle = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const frameDiv3Style = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  const frameDiv4Style = useMemo(() => {
    return {
      top: propTop1,
      height: propHeight,
    };
  }, [propTop1, propHeight]);

  const frameDiv5Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const manageTaxesSocialStyle = useMemo(() => {
    return {
      left: propLeft5,
      textAlign: propTextAlign2,
    };
  }, [propLeft5, propTextAlign2]);

  const weDeductTheStyle = useMemo(() => {
    return {
      top: propTop2,
    };
  }, [propTop2]);

  return (
    <div
      className="absolute top-[116px] left-[53px] w-[1360px] h-[254px] overflow-hidden text-left text-lg text-gray-900 font-cta"
      style={frameStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-11xl bg-mediumseagreen-600 w-[432px] h-[254px]"
        style={frameDiv2Style}
      >
        <div className="absolute top-[35px] left-[29px] w-[374px] h-[184px]">
          <div className="absolute top-[112px] left-[0px] w-[374px] h-[72px]">
            <div
              className="absolute top-[0px] left-[31px] font-semibold"
              style={hireAnywhereWithoutStyle}
            >
              {featureDescription}
            </div>
            <div className="absolute top-[34px] left-[0px] text-base text-darkslategray-300 text-center flex items-center justify-center w-[374px]">
              {employmentOptions}
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[137px] rounded-3xl w-[100px] h-[100px]"
            alt=""
            src={imageAltText}
            style={frameIconStyle}
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[464px] rounded-11xl bg-mediumseagreen-600 w-[432px] h-[254px]">
        <div className="absolute top-[35px] left-[29px] w-[374px] h-[184px]">
          <div className="absolute top-[112px] left-[0px] w-[374px] h-[72px]">
            <div
              className="absolute top-[0px] left-[31px] font-semibold"
              style={createLocalEmploymentStyle}
            >
              {featureTitle}
            </div>
            <div className="absolute top-[34px] left-[0px] text-base text-darkslategray-300 text-center flex items-center justify-center w-[374px]">
              {contractDescription}
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[133px] w-[100px] h-[100px]"
            alt=""
            src={imageDimensions}
            style={groupIconStyle}
          />
        </div>
      </div>
      <div
        className="absolute top-[0px] left-[928px] rounded-11xl bg-mediumseagreen-600 w-[432px] h-[254px]"
        style={frameDiv3Style}
      >
        <div
          className="absolute top-[35px] left-[29px] w-[374px] h-[184px]"
          style={frameDiv4Style}
        >
          <div
            className="absolute top-[112px] left-[0px] w-[374px] h-[72px]"
            style={frameDiv5Style}
          >
            <div
              className="absolute top-[0px] left-[31px] font-semibold"
              style={manageTaxesSocialStyle}
            >
              {featureSubtitle}
            </div>
            <div
              className="absolute top-[34px] left-[0px] text-base text-darkslategray-300 text-center flex items-center justify-center w-[374px]"
              style={weDeductTheStyle}
            >
              {complianceMessage}
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[137px] w-[100px] h-[100px]"
            alt=""
            src={imageDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerFrame;
