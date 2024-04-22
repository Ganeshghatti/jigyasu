import React from "react";
import "./PageTitle.scss";

export default function PageTitle({ title }) {
  return (
    <div id="PageTitle" className="w-full PageTitle mt-8 relative">
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        className="circle1"
        height="77"
        viewBox="0 0 82 77"
        fill="none"
      >
        <ellipse cx="41" cy="38.5" rx="41" ry="38.5" fill="#FDC24B" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        className="circle2"
        viewBox="0 0 41 41"
        fill="none"
      >
        <circle cx="20.1692" cy="20.1692" r="20.1692" fill="#FE7062" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        className="circle3"
      >
        <circle cx="15" cy="15" r="15" fill="#2D6882" />
      </svg>
    </div>
  );
}
