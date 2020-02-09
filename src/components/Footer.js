import React from "react";
import { FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center p-8 items-center text-black">
      <a href="#">
        <FaTwitter className="hover:text-red-500 mr-4" size="3em" />
      </a>
      <a href="#">
        <FaFacebook className="hover:text-red-500 ml-4" size="3em" />
      </a>
    </div>
  );
};

export default Footer;
