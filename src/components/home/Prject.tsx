import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Prject() {
  const translatingButtonStyle = {
    animation: "translatetree 5s ease-out 0s alternate infinite", // Corrected animation value
  };
  return (
    <div className="my-12">
      <div className=" w-[80%] mx-auto flex justify-center flex-col text-center">
        <h1 className="text-[1.7rem] font-[700]">OUR CORE VALUE</h1>
        <h1 className="text-[1rem] font-[700]">
          We are ready for work, any project or new services we are ready for
          all time
        </h1>
        <div style={translatingButtonStyle} className="mx-auto mt-[-80px]">
          <img
            src="https://pidkast.gthememarket.com/assets/images/section-shape2.svg"
            alt=""
          />
        </div>
      </div>

      <div className=" relative mt-20">
        <div className="mx-auto">
          <img
            src="https://i.ibb.co/NLXkqxm/safe1.png"
            className="custom-rotate mx-auto "
            style={{
              animation: "translatetree 2s ease-out 0s alternate infinite",
            }}
            alt=""
          />
        </div>
        <div className="mx-auto z-10">
          <img
            src="https://i.ibb.co/hZq1zvm/service3.png"
            className="w-[80%] flex items-center justify-center rotate-180 mx-auto absolute"
            alt=""
          />
        </div>
        <div className="grid md:grid-cols-4 relative w-[80%] mx-auto justify-center gap-6 ">
          <div className="text-center py-10 shadow-xl shadow-top-right shadow-bottom-left .. transform hover:-translate-y-3 transition-transform duration-300">
            <img
              src="https://i.ibb.co/yft13Lr/techonology.png"
              className=" mx-auto"
              alt=""
            />
            <h1 className="text-[1rem] font-[700] my-3">
              Technologies <br /> We Use
            </h1>
            <h2 className="text-[1.2rem] font-[600] text-gray-400 mt-5">
              Javascript (React,Next js, Angular,Vue), Node.js, Express.js,
              Mongose
            </h2>
          </div>
          <div className="text-center py-12 shadow-xl shadow-top-right shadow-bottom-left .. transform hover:-translate-y-3 transition-transform duration-300">
            <img
              src="https://i.ibb.co/KjGWbDZ/services4.png"
              className=" mx-auto"
              alt=""
            />
            <h1 className="text-[1rem] font-[700] my-3">
              Website <br /> Development
            </h1>
            <h2 className="text-[1.2rem] font-[600] text-gray-400 mt-5">
              Web Development || expertise Functional prototypes Further support
            </h2>
          </div>
          <div className="text-center py-12 shadow-xl shadow-top-right shadow-bottom-left .. transform hover:-translate-y-3 transition-transform duration-300">
            <img
              src="https://i.ibb.co/sbTYQzp/undraw-android-jr64-1.png"
              className=" w-[80px] mx-auto"
              alt=""
            />
            <h1 className="text-[1rem] font-[700] my-3">
              Mobile <br /> Application
            </h1>
            <h2 className="text-[1.2rem] font-[600] text-gray-400 mt-5">
              We are use Reactive Native using for android application
            </h2>
          </div>
          <div className="text-center py-12 shadow-xl shadow-top-right shadow-bottom-left .. transform hover:-translate-y-3 transition-transform duration-300">
            <img
              src="https://i.ibb.co/yft13Lr/techonology.png"
              className=" mx-auto"
              alt=""
            />
            <h1 className="text-[1rem] font-[700] my-3">
              Us Design <br /> Prototype
            </h1>
            <h2 className="text-[1.2rem] font-[600] text-gray-400 mt-5">
              User Experience Design Visual & Graphic Design Software
              architecture
            </h2>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-[80%] mx-auto relative mt-5">
          <h1 className="text-[1.75rem] font-bold">About Us</h1>
          <div
            style={translatingButtonStyle}
            className="mx-auto mt-[-70px] ml-[-6px]"
          >
            <img
              src="https://pidkast.gthememarket.com/assets/images/section-shape2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 relative w-[80%] mx-auto justify-center gap-6 ">
          <div>
            <div className="float-left">
              <img
                src="https://i.ibb.co/tLDW0Zw/safe-2.png"
                className="custom-rotate w-[80%]"
                alt=""
              />
            </div>
            <img src="https://i.ibb.co/Sn4Fb9h/2668383-ai.png" alt="" />
            <div className="float-right">
              <img
                src="https://i.ibb.co/tLDW0Zw/safe-2.png"
                className="custom-rotate w-[80%]"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-red-400 font-[400] my-3">About Us</h1>
            <div className="flex items-center font-[400]">
              <span className="text-[18px] text-[red] mr-3">
                <BsFillCheckCircleFill />
              </span>
              <h1 className="text-[20px] font-[600]">Top-class experts</h1>
            </div>
            <h1 className="text-[16px] ">
              Our team of skilled developers, designers, testers, and project
              managers are well-versed in their respective fields. Moreover,
              everyone on our team is fluent in English, allowing you to have
              detailed discussions with every individual involved in the project
            </h1>

            <div className="flex items-center font-[400] mt-3">
              <span className="text-[18px] text-[red] mr-3">
                <BsFillCheckCircleFill />
              </span>
              <h1 className="text-[20px] font-[600]">
                Exceptional value for the price
              </h1>
              <img
                src="https://i.ibb.co/7bQbRX9/pinkavg.png"
                className="custom-bounce ml-[300px] mt-[-30px]   absolute"
                alt=""
              />
            </div>
            <h1 className="text-[16px] ">
              While maintaining exceptional quality, our rates remain below the
              industry average in Bangladesh. Additionally, we offer
              comprehensive breakdowns of expenses, ensuring full transparency
              about the specific items you are investing in.
            </h1>

            <div className=" ">
              <div className="flex items-center font-[400] mt-3">
                <span className="text-[18px] text-[red] mr-3">
                  <BsFillCheckCircleFill />
                </span>
                <h1 className="text-[20px] font-[600] ">Full commitment</h1>
              </div>
              <img
                src="https://i.ibb.co/4YrTSDD/safe-3.png"
                className="custom-bounce ml-[200px] mt-[-30px]   absolute"
                alt=""
              />

              <h1 className="text-[16px] relative">
                A significant portion of our clientele originates from
                referrals. Our commitment to delivering exceptional service
                ensures the satisfaction of every customer, aiming to establish
                another satisfied partnership. We anticipate that you will
                become a long-term collaborator, mirroring the enduring
                relationships we maintain with numerous clients over the years
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prject;
