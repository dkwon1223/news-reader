import React from "react";
import { hourglass } from "ldrs";

hourglass.register();

const Loading = () => {
  return (
    <section className="h-screen w-screen flex items-start py-20 justify-center">
        <l-hourglass
          size="150"
          bg-opacity="0.1"
          speed="1.75"
          color="#3949AB"
        ></l-hourglass>
        <h1 className="text-5xl font-extrabold text-indigo-600">
            LOADING...
        </h1>
        <l-hourglass
          size="150"
          bg-opacity="0.1"
          speed="1.75"
          color="#3949AB"
        ></l-hourglass>
    </section>
  );
};

export default Loading;
