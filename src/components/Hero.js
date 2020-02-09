import React, { useState, useEffect } from "react";
import anime from "animejs";

export default function Hero() {
  useEffect(() => {
    const animateLogo = () => {
      anime({
        targets: ".hero-items",
        translateX: [-5, 0],
        easing: "linear",
        opacity: [0, 1],
        duration: 512
      });
    };

    anime({
      targets: ".hero-circle",
      padding: [0, 100],
      width: [25, 600],
      easing: "easeInOutQuint",
      height: [25, 600],
      duration: 1800,
      delay: 200,
      complete: animateLogo
    });
  }, []);

  return (
    <div className="h-screen justify-center items-center flex">
      <div className="hero-circle  text-gray-200 text-center bg-black shadow-2xl rounded-full">
        <div className="hero-items opacity-0">
          <div className="flex flex-col justify-around items-center">
            <img
              className="w-64"
              alt="slice-bread"
              src="https://publicdomainvectors.org/photos/bread.png"
            />
            <h1 className="font-bold text-5xl">FRENCH TOAST</h1>
            <div className="flex justify-center items-center">
              <span className="mr-4 h-0 border-solid border-2 border-red-600 w-24 " />
              <h2 className="font-bold text-3xl text-red-500 tracking-widest">
                BAKERY
              </h2>
              <span className="ml-4 h-0 border-solid border-2 border-red-600 w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
