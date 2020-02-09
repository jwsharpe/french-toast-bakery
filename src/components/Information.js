import React from "react";

export default function Information() {
  return (
    <div className="flex items-center flex-wrap justify-center bg-black text-gray-100 border-t-4 border-gray-800 pt-16 pb-16 font-semibold">
      <div className="max-w-md m-12 text-xl">
        <p>
          "Share review Embed review 10/16/2019 2 photos Found this gem today.
          The place was spotless. All the food looked delicious. I highly
          recommend giving this place a chance..."
        </p>
        <p className="text-red-800">Staci A.</p>
      </div>
      <div className="max-w-md m-12 text-xl">
        <p>
          "It's nice to have a place on Roosevelt Ave where you can get
          pancakes, omelettes, coffee, and other breakfast favorites..."
        </p>
        <p className="text-red-800">Zurg R.</p>
      </div>

      <div className="max-w-md m-12 text-xl">
        <p>
          "I walked in to find myself greeted by a nice lady. I'm not sure but
          she has a great attitude and customer service. I mulled over the whole
          menu..."
        </p>
        <p className="text-red-800">Polly H.</p>
      </div>
      <div className="max-w-md m-12 text-xl">
        <p>
          "I've stopped by here a couple times and so far it's been really
          solid. First time I came was closer to end of day but the pastries I
          had were still good (red velvet cake was quite unique), so I figured
          I'd make a morning visit to round it out..."
        </p>
        <p className="text-red-800">Brian O.</p>
      </div>
    </div>
  );
}
