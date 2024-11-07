import React, { useEffect } from "react";
import Backdrop from "./backdrop/Backdrop";

export default function HomePage() {

  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, 100); // Adding a slight delay to ensure the elements are rendered before adding the class
    });
  }, []);

  return (
    <>
      <Backdrop />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-30">
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl fade-in">
            Mealfinder.
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 fade-in">
            Delicious and easy recipes, made simple.
          </p>
        </div>
      </div>
    </>
  );
}
