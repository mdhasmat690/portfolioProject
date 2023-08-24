function Product() {
  return (
    <div>
      <br />
      <br />
      <br />

      <div className="w-[80%] mx-auto  mt-5">
        <h4 className="text-red-600">OUR PRODUCTS</h4>
        <h1 className="text-[1.75rem] font-bold">
          Choose a product according to your needs
        </h1>
        <div
          style={{
            animation: "translatetree 5s ease-out 0s alternate infinite",
          }}
          className="mx-auto  mt-[-70px]  ml-[-6px]"
        >
          <img
            src="https://pidkast.gthememarket.com/assets/images/section-shape2.svg"
            alt=""
          />
        </div>
        <img
          src="https://i.ibb.co/z4BQ5db/svg03.png"
          className="mx-auto custom-rotate "
          alt=""
        />
      </div>
      <br />
      <div className="grid md:grid-cols-3 w-[80%] mx-auto">
        <div className="h-[350px]  p-5 text-center w-[100%] shadow shadow-r transition-transform duration-700 transform hover:scale-110 ">
          <h1 className="text-[22px] font-bold">
            Education <br /> Management System
          </h1>
          <h3 className="font-[600] my-3">Online Admission</h3>
          <h3 className="font-[600]">Student/Gradient Panel</h3>
          <h3 className="font-[600] my-3">Online Class </h3>
          <h3 className="font-[600] my-3">Online Payment</h3>
          <h3 className="font-[600]">SMS Notification</h3>
          <button className="font-[600] my-3 bg-[#7FC241] px-4 py-2 rounded-md">
            Details
          </button>
        </div>
        <div className="  pt-8 h-[400px] text-center w-[100%]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-transform duration-700 transform hover:scale-110 ">
          <h1 className="text-[22px] font-bold ">
            Business <br /> Management System
          </h1>
          <h3 className="font-[600] my-4">Online Order</h3>
          <h3 className="font-[600]">Chating</h3>
          <h3 className="font-[600] my-4">Online notification</h3>
          <h3 className="font-[600] my-4">Online Payment</h3>
          <h3 className="font-[600]">Email notification</h3>
          <h3 className="font-[600]">Price</h3>
          <button className="font-[600] my-3 bg-[#7FC241] px-4 py-2 rounded-md">
            Details
          </button>
        </div>

        <div className=" h-[350px] p-5 text-center w-[100%]  shadow shadow-r  overflow-hidden">
          <div className="transition-transform duration-700 transform hover:scale-110 ">
            {" "}
            <h1 className="text-[22px] font-bold">e commerce System</h1>
            <h3 className="font-[600] my-3">Order</h3>
            <h3 className="font-[600]">tracking</h3>
            <h3 className="font-[600] my-3">Online Payment</h3>
            <h3 className="font-[600]">confirm order</h3>
            <h3 className="font-[600] my-4">Live tracking</h3>
            <button className="font-[600] my-3 bg-[#7FC241] px-4 py-2 rounded-md">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
