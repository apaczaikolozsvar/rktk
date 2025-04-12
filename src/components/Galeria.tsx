// Gallery.tsx
import  { useState } from "react";
import img1 from "../assets/kepek/1.jpg";
import img2 from "../assets/kepek/2.jpg";
import img3 from "../assets/kepek/3.jpg";
import img4 from "../assets/kepek/4.jpg";
import img5 from "../assets/kepek/5.jpg";
import img6 from "../assets/kepek/6.jpg";
import img7 from "../assets/kepek/7.jpg";
import img8 from "../assets/kepek/8.jpg";
import img9 from "../assets/kepek/9.jpg";
import img10 from "../assets/kepek/10.jpg";
import img11 from "../assets/kepek/k1.jpg";
import img12 from "../assets/kepek/k2.jpg";
import img13 from "../assets/kepek/k3.jpg";
import img14 from "../assets/kepek/k4.jpg";

const images = [img11, img12, img13, img14,img1 , img3, img4, img5, img6, img7, img8, img9, img10,img2 ];

const Gallery = () => {
  const [focusedImage, setFocusedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            onClick={() => setFocusedImage(src)}
          >
            <img
              src={src}
              alt={`Kép ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      {focusedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setFocusedImage(null)}
        >
          <img
            src={focusedImage}
            alt="Fókuszált kép"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl transition-transform duration-300"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
