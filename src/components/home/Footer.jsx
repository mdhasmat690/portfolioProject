import { GiTireIronCross } from "react-icons/gi";

function Footer() {
  return (
    <div className="bg-[#FEF6DF]">
      <div className="w-[80%] mx-auto py-14">
        <div className="grid md:grid-cols-5">
          <div className="col-span-2 ">
            <div className="flex items-center">
              {" "}
              <img
                src="https://img.freepik.com/free-vector/letter-h-with-blossoms_53876-66878.jpg?size=626&ext=jpg&ga=GA1.2.1738658831.1683692513&semt=ais"
                className="w-[40px] rounded-[50%] mr-2"
                alt=""
              />
              <h2 className="font-[500] text-[20px]">Md Hasmat</h2>
            </div>
            <h1 className=" text-gray-400 text-[18px] font-[400] mt-6">
              Address: Sonachaluni,Birganj,Dinajpur
            </h1>
          </div>
          <div className="col-span-1">
            {" "}
            <div className="">
              <h2 className="font-[500] text-[20px]">Quick Info</h2>
              <div className="border-b-[1px] border-red-500  border-solid w-[30%]"></div>
            </div>
            <h1 className=" text-gray-400  mt-8  ">Technologies</h1>
            <h1 className=" text-gray-400  my-3  ">Our Team</h1>
            <h1 className=" text-gray-400  ">Portfolio</h1>
          </div>
          <div className="col-span-1">
            {" "}
            <div className=" ">
              <h2 className="font-[500] text-[20px]">Services</h2>
              <div className="border-b-[1px] border-red-500  border-solid w-[30%]"></div>
            </div>
            <h1 className=" text-gray-400  mt-8  ">Web Development</h1>
            <h1 className=" text-gray-400  my-3  ">Mobile Aps</h1>
            <h1 className=" text-gray-400  ">Error fixed</h1>
            <h1 className=" text-gray-400  my-3">Bug Solve</h1>
          </div>
          <div className="col-span-1">
            {" "}
            <div className=" ">
              <h2 className="font-[500] text-[20px] ">Contact with us</h2>
              <div className="border-b-[1px] border-red-500  border-solid w-[30%]"></div>
            </div>
            <h1 className=" text-gray-400  mt-8  ">MOBILE: 01796874121</h1>
            <h1 className=" text-gray-400  my-3  ">
              Email: mdhasmat690@gmail.com
            </h1>
          </div>
        </div>
        <br />
        <div className="border-b border-gray-400 border-solid"></div>
        <div className="flex justify-between">
          <GiTireIronCross className="custom-rotate" />
          <GiTireIronCross className="custom-rotate" />
        </div>
        <div>
          <h1 className="text-center text-gray-400 my-8">
            © mdhasmat690@gmail.com - All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
