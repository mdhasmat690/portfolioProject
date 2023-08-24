import { useState } from "react";
import Banner from "./Banner";
import { useEffect } from "react";

function Navigation() {
  const [scrollBg, setScrollBg] = useState(false); // State to track whether to apply scroll background

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBg(true); // Apply scroll background when scrolled down
      } else {
        setScrollBg(false); // Remove scroll background when scrolled to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(254, 241, 206, 1), rgba(255, 251, 242, 1))",
          }}
        >
          <div>
            <img
              src="https://i.ibb.co/T2THpnJ/svgexport-3.png"
              alt=""
              // className="md:w-[20%] lg:w-[15%] xl:max-w-[300px] w-[30%]   rotate-180 relative"
              className="md:w-[20%] lg:w-[30vh] xl:max-w-[300px] w-[30%]  rotate-180 relative"
            />
          </div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              background: scrollBg && "white", // Apply scroll background color conditionally
              transition: "background 2s ease", // Add a smooth transition
              // transform: scrollBg ? "scale(1.02)" : "scale(1)", // Apply a slight scale transform
              transitionDelay: "0.3s", // Add a delay before transition
            }}
            className={`  ${
              scrollBg ? "shadow-md   transition-all duration-500" : ""
            } relative`}
          >
            <div className="w-[90%] mx-auto p-2">
              <div className="navbar  ">
                <div className="flex-1">
                  <div className="flex items-center">
                    {" "}
                    <img
                      src="https://img.freepik.com/free-vector/letter-h-with-blossoms_53876-66878.jpg?size=626&ext=jpg&ga=GA1.2.1738658831.1683692513&semt=ais"
                      className="w-[40px] rounded-[50%] mr-2"
                      alt=""
                    />
                    <h2 className="font-[400] text-[20px] md:block hidden">
                      Md Hasmat
                    </h2>
                  </div>
                  {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="flex-none">
                  <ul className="menu menu-horizontal px-1">
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>About</a>
                    </li>
                    <li>
                      <a>Home</a>
                    </li>

                    {/* <li>
                      <details>
                        <summary>Parent</summary>
                        <ul className="p-2  ">
                          <li>
                            <a>Link 1</a>
                          </li>
                          <li>
                            <a>Link 2</a>
                          </li>
                        </ul>
                      </details>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Banner />
        </div>
      </div>
    </>
  );
}

export default Navigation;
