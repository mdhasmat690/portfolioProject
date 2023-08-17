function Banner() {
  return (
    <div className="">
      <img
        src="https://i.ibb.co/T2THpnJ/svgexport-3.png"
        alt=""
        className="md:w-[15%] w-[30%]   rotate-180"
      />
      <div className="md:grid grid-cols-2   gap-3">
        <div className="md:hidden block">
          <div>
            <img
              style={{
                animation:
                  "rotate 5s ease-out .5s alternate infinite none running",
              }}
              src="https://i.ibb.co/1Tj0g4Q/circle.png"
              alt=""
              className="md:w-[58%] w-[50%] mt-[-200px] mx-auto"
            />
          </div>
          <div className="  ">
            <img
              style={{
                animation: "translate 5s ease-out 0s alternate infinite",
              }}
              src="https://i.ibb.co/1ZHBWgS/banner-Poster.png"
              className="md:w-[60%]  w-[70%] mx-auto rounded-[8px] mb-12"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="float-right mr-12">
            <img
              src="https://i.ibb.co/NLXkqxm/safe1.png"
              className="custom-rotate"
              alt=""
            />
          </div>
          <div className="text-justify w-[80%] mx-auto  text-[2.375rem] leading-[1.15] md:text-[3.5rem] font-[700]">
            <h1 className="  ">
              Latest <span className="text-[#ed8a0a]">Technology</span> <br />{" "}
              used in EveryDay in project
            </h1>
          </div>
          <h1>
            {" "}
            <h1 className=" w-[80%] mx-auto text-justify my-10">
              We curate the best digital jobs for those who are looking to start
              their career in designing.
            </h1>
          </h1>
          <div className=" w-[80%] mx-auto rounded-[8px] border border-solid border-[#ddd] shadow-md bg-white flex justify-between items-center p-2 ">
            <span className="p-1 text-[16px] text-[#ed8a0a] font-[500]">
              Enter your email
            </span>
            <span className="bg-[#ed8a0a] py-[10px] px-[15px] rounded-[6px]">
              Subscribe
            </span>
          </div>
          <div className="float-right">
            <img
              src="https://i.ibb.co/tLDW0Zw/safe-2.png"
              className="custom-rotate w-[80%]"
              alt=""
            />
          </div>
          <img
            src="https://i.ibb.co/4YrTSDD/safe-3.png"
            className="custom-bounce ml-6 mt-7"
            alt=""
          />
        </div>

        <div className="md:block hidden">
          <div>
            <img
              style={{
                animation:
                  "rotate 5s ease-out .5s alternate infinite none running",
              }}
              src="https://i.ibb.co/1Tj0g4Q/circle.png"
              alt=""
              className="md:w-[58%] w-[80%] mt-[-300px] md:mt-[-300px]"
            />
          </div>
          <div className="mt-[-100px] absolute">
            <img
              style={{
                animation: "translate 5s ease-out 0s alternate infinite",
              }}
              src="https://i.ibb.co/1ZHBWgS/banner-Poster.png"
              className="md:w-[60%]  w-[70%] mx-auto rounded-[8px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
