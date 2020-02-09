import React, { useEffect } from "react";
import anime from "animejs";
export default function Header() {
  useEffect(() => {
    anime({
      targets: ".header-actions",
      easing: "linear",
      opacity: [0, 1],
      duration: 512,
      delay: 2500
    });
  }, []);

  return (
    <div className="header-actions opacity-0 text-right p-8 absolute right-0 text-gray-700 font-semibold">
      <a className=" hover:text-red-500  mr-2" href="/">
        About
      </a>
      <a className=" hover:text-red-500  mr-2" href="/">
        Menu
      </a>
      <a className="hover:text-red-500 " href="/">
        Contact Us
      </a>
    </div>
  );
}
