import React from "react";
import slider1 from "../assets/slider1.webp";
import slider2 from "../assets/ slider2.jpg";
import slider3 from "../assets/slider3.jpeg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpeg";
import { ImageSlider } from "./ImageSlider";

const IMAGES = [
  { url: slider1, alt: "Photo One" },
  { url: slider2, alt: "Photo Two" },
  { url: slider3, alt: "Photo Three" },
  { url: slider4, alt: "Photo Four" },
  { url: slider5, alt: "Phoo Five" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  );
}
