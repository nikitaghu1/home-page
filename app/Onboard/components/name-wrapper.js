const NameWrapper = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[161px] h-[159px] text-justify text-3xs text-darkslategray-500 font-cta">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-white w-[161px] h-[159px]" />
      <div className="absolute top-[10px] left-[8px] w-[141px] h-12">
        <div className="absolute top-[0px] left-[0px] w-[141px] h-12">
          <img
            className="absolute top-[0px] left-[0px] rounded-lg w-12 h-12 object-cover"
            alt=""
            src="/rectangle-84@2x.png"
          />
          <div className="absolute h-[62.5%] w-[57.45%] top-[16.67%] right-[0%] bottom-[20.83%] left-[42.55%]">
            <div className="absolute h-2/5 w-[35.8%] top-[0%] right-[64.2%] bottom-[60%] left-[0%]">
              <div className="absolute top-[0%] left-[0%] font-semibold">
                Name
              </div>
            </div>
            <div className="absolute h-[30%] w-full top-[70%] right-[0%] bottom-[0%] left-[0%] text-[7.83px] text-darkgray-100">
              <div className="absolute top-[0%] left-[0%] font-medium">
                UIUX Designer - India
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute h-[7.55%] w-[7.45%] top-[30.19%] right-[63.98%] bottom-[62.26%] left-[28.57%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/ellipse-333@2x.png"
      />
    </div>
  );
};

export default NameWrapper;
