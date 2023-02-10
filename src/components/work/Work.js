import { useState, useEffect} from "react";
import WorkData from "./WorkData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Work = () => {
  const slides = WorkData;
  const length = slides.length;

  const [slidesNumber, setSlidesNumber] = useState(3);
  const [currentFirstIndex, setCurrentFirstIndex] = useState(0);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesNumber(1);
    } 
    else if (window.innerWidth < 1024){
        setSlidesNumber(2);
    }
    else
    {
      setSlidesNumber(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleNext = () => {
    setCurrentFirstIndex((currentFirstIndex + 1) % length);
  };

  const handlePrevious = () => {
    if (currentFirstIndex - 1 < 0) setCurrentFirstIndex(length - 1);
    else setCurrentFirstIndex(currentFirstIndex - 1);
  };

  const getImages = () => {
    let content = [];
    for (let i = 0; i < slidesNumber; i++) {
      let index = (currentFirstIndex + i) % length;
      content.push(slides[index]);
    }
    return content;
  };

  return (
    <div className="flex flex-col mt-40 w-full">
      <div className="flex items-center">
        <div className="text-white font-workSans lg:text-8xl text-6xl">
          Work
        </div>
        <div className="ml-auto flex space-x-4">
          <BsArrowLeftCircleFill
            className="slider-icon"
            onClick={handlePrevious}
          />
          <BsArrowRightCircleFill
            className="slider-icon"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="flex space-x-2 md:space-x-10 whitespace-nowrap overflow-auto scrollbar-hide">
        {getImages().map((slide) => {
          return (
            <div className="flex flex-col w-full space-y-2">
              <img src={slide.image} className={`h-full flex-1`}></img>
              <p className=" font-inter font-bold text-sm md:text-xl">
                {slide.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
