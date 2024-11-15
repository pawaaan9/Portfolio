"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Portfolio() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" style={{ backgroundColor: "#101637" }}>
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-xl md:text-3xl font-bold text-[#D3D8F4]  font-sans text-center">
          Portfolio
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">

          </p>
        </div>
      ))}
    </>
  );
};

const data = [
  {
    src: "",
    category: "Full Stack Developer, UI/UX Designer",
    title: "AGRI MARKET",
    content: <DummyContent />,
  },
  {
    src: "",
    category: "Frontend Developer, UI/UX Designer",
    title: "SCALEAFY ",
    content: <DummyContent />,
  },
  {
    src: "",
    category: "Full Stack Developer, UI/UX Designer",
    title: "PLATEMATE",
    content: <DummyContent />,
  },
  {
    src: "",
    category: "Full Stack Developer, UI/UX Designer",
    title: "MONEYMAP",
    content: <DummyContent />,
  }
];