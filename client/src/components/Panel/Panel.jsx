import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import "./Panel.scss";
import { useLocation } from "react-router-dom";

export default function Panel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setmenu] = useState(false);
  const user = useSelector((state) => state.user);
  const [data, setdata] = useState({
    role: "Ux Designer",
    name: "Thomas Anree",
  });
  const [notifications, setnotification] = useState([
    { work: "sdf" },
    { work: "sdf" },
  ]);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle the dropdown toggle
  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [selectedoption, setselectedoption] = useState({});
  const [options, setoptions] = useState([
    { title: "Home" },
    { title: "Dashboard" },
    {
      title: "Products",
      suboptions: [{ title: "product 1" }, { title: "product 2" }],
    },
    {
      title: "Products",
      suboptions: [{ title: "product 1" }, { title: "product 2" }],
    },
    { title: "Messages" },
    { title: "Order" },
    { title: "Calender" },
    { title: "Static" },
    { title: "Documents" },
  ]);
  const menuf = () => {
    setmenu(!menu);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const location = useLocation();
  const currentRoute = location.pathname.substring(1);
  return (
    <nav className="flex flex-col" id="Panel">
      <div className="flex justify-between items-center w-full topbar py-4 px-14 md:px-6 topbar">
        <div className="md:hidden" />
        <div className="hidden md:block cursor-pointer">
          {menu ? (
            <CloseIcon
              onClick={menuf}
              className="fixed top-6 left-6"
              style={{ zIndex: "999" }}
            />
          ) : (
            <MenuIcon onClick={menuf} />
          )}
        </div>
        <div className="flex gap-4 items-center">
          <div className="p-1 bg-[#F3F4F6] relative">
            {notifications && notifications.length > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0.5 top-0.5"
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
              >
                <circle cx="4" cy="4.5" r="3.5" fill="#DC3545" stroke="white" />
              </svg>
            )}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_256_265)">
                <path
                  d="M14.3969 13.7758L13.8969 13.0008C13.7969 12.8508 13.7469 12.7008 13.7469 12.5258V7.32578C13.7469 5.85078 13.1219 4.47578 11.9719 3.45078C11.0469 2.62578 9.84687 2.10078 8.57187 2.00078V1.50078C8.57187 1.20078 8.32187 0.925781 7.99687 0.925781C7.69687 0.925781 7.42188 1.17578 7.42188 1.50078V1.97578C7.37187 1.97578 7.32187 1.97578 7.27187 2.00078C4.37187 2.32578 2.19688 4.65078 2.19688 7.42578V12.5258C2.17188 12.7758 2.12188 12.9008 2.07188 12.9758L1.59688 13.7758C1.44687 14.0258 1.44687 14.3258 1.59688 14.5758C1.74688 14.8008 1.99688 14.9508 2.27188 14.9508H7.44687V15.5008C7.44687 15.8008 7.69687 16.0758 8.02187 16.0758C8.32187 16.0758 8.59688 15.8258 8.59688 15.5008V14.9508H13.7469C14.0219 14.9508 14.2719 14.8008 14.4219 14.5758C14.5719 14.3258 14.5719 14.0258 14.3969 13.7758ZM2.87187 13.8258L3.04687 13.5258C3.19687 13.2758 3.27187 12.9758 3.32187 12.6258V7.42578C3.32187 5.22578 5.07187 3.37578 7.39687 3.12578C8.82187 2.97578 10.2219 3.40078 11.2469 4.30078C12.1469 5.10078 12.6469 6.17578 12.6469 7.32578V12.5258C12.6469 12.9008 12.7469 13.2508 12.9719 13.6008L13.1219 13.8258H2.87187V13.8258Z"
                  fill="#637381"
                />
              </g>
              <defs>
                <clipPath id="clip0_256_265">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="p-1 bg-[#F3F4F6] md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M1.37816 16.1249C1.15316 16.1249 0.928165 16.0499 0.753165 15.8749C0.453165 15.5999 0.378165 15.1999 0.503165 14.8499L1.52816 12.1999C0.728165 10.8249 0.378165 9.22494 0.553165 7.59994C0.928165 4.09994 3.72816 1.27494 7.22816 0.92494C9.50316 0.69994 11.7282 1.47494 13.3532 3.07494C14.9532 4.67494 15.7532 6.89994 15.5282 9.17494C15.1782 12.7499 12.3282 15.5749 8.75317 15.8999C7.10317 16.0499 5.50316 15.6999 4.12816 14.8499L1.80316 16.0249C1.65316 16.0999 1.52816 16.1249 1.37816 16.1249ZM4.15316 13.6499C4.25316 13.6499 4.37816 13.6749 4.45316 13.7499C5.70316 14.5749 7.12817 14.9249 8.62817 14.7999C11.6532 14.5249 14.0782 12.0999 14.3782 9.07494C14.5782 7.12494 13.9032 5.24994 12.5282 3.87494C11.1782 2.49994 9.27816 1.82494 7.35316 2.04994C4.35316 2.34994 1.97816 4.74994 1.65316 7.72494C1.50316 9.19994 1.85316 10.6249 2.62816 11.8499C2.72816 11.9999 2.75316 12.1999 2.67816 12.3499L1.72816 14.7999L3.90316 13.6999C4.00316 13.6749 4.07816 13.6499 4.15316 13.6499Z"
                fill="#637381"
              />
            </svg>
          </div>
          <div className="flex flex-col md:hidden">
            <p className="name">{data.name}</p>
            <p className="role">{data.role}</p>
          </div>
          <Avatar />
        </div>
      </div>
      {menu && <div className="overlay" onClick={menuf} />}
      {(menu || windowWidth > 867) && (
        <div className="flex flex-col items-center md:fixed md:left-0 h-screen md:w-2/3 w-fit py-4 gap-8 absolute top-0 leftbar">
          <img src="/public/assets/logo.png" alt="logo" />
          <div className="options">
            {options.map((option, index) => {
              // Use a unique key for the main option
              const key = `${option.title}-${index}`;

              return (
                <div key={key}>
                  <div
                    className={`box ${
                      currentRoute.toLowerCase() === option.title.toLowerCase()
                        ? "box-current"
                        : ""
                    }`}
                    onClick={() => handleDropdown(index)}
                  >
                    {option.title}
                    {option.suboptions && option.suboptions.length > 0 && (
                      <img
                        src={
                          openDropdown === index
                            ? "public/assets/icon/down.svg" 
                            : "public/assets/icon/right.svg" 
                        }
                        alt={openDropdown === index ? "Collapse" : "Expand"}
                        className="dropdown-icon"
                      />
                    )}
                  </div>
                  {openDropdown === index && (
                    <div className="flex flex-col">
                      {option.suboptions.map((suboption, subIndex) => {
                        const subKey = `${key}-suboption-${subIndex}`;
                        return (
                          <div key={subKey} className="box-suboption">
                            {suboption.title}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
