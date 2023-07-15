"use client";
import { useState, useEffect } from "react";

import { currentProperties } from "./context";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Properties from "@/components/Properties";

export default function Home() {
  const [elements, setElements] = useState([]); //Drag and drop elements
  const [sceneHeader, setSceneHeader] = useState(false); //Scene header
  const [sceneFooter, setSceneFooter] = useState(false); //Scene footer
  const [currentElement, setCurrentElement] = useState(null);
  const [sceneProperties, setSceneProperties] = useState({}); //An element's height

  function handleNewHeader(event) {
    if (!sceneHeader) {
      event.target.classList.remove("bg-headerNoSelect");
      event.target.classList.add("bg-headerSelect");
      let newElement = (
        <Header
          key="header"
          id="header"
          setCurrentElement={setCurrentElement}
        />
      );
      setSceneHeader(newElement);
      setCurrentElement(newElement);
    } else {
      event.target.classList.remove("bg-headerSelect");
      event.target.classList.add("bg-headerNoSelect");
      setSceneHeader(false);
      //Need to change current element as well
    }
  }

  function handleNewFooter(event) {
    if (!sceneFooter) {
      event.target.classList.remove("bg-headerNoSelect");
      event.target.classList.add("bg-headerSelect");
      let newElement = (
        <Footer
          key="footer"
          id="footer"
          setCurrentElement={setCurrentElement}
        />
      );
      setSceneFooter(newElement);
      setCurrentElement(newElement);
    } else {
      event.target.classList.remove("bg-headerSelect");
      event.target.classList.add("bg-headerNoSelect");
      setSceneFooter(false);
      //Need to change current element as well
    }
  }

  function newProperty(property) {
    const propertyKey = Object.keys(property); //Get an array of properties keys (only 1)
    let newKey = propertyKey[0]; //Get the new property's key
    let propertiesCopy = { ...sceneProperties }; //Create a copy of current properties
    propertiesCopy[currentElement.key] = {
      ...sceneProperties[currentElement.key], //Assigns any previous properties to the copied element
    };
    propertiesCopy[currentElement.key][newKey] = property[newKey].toString(); //Create/update new property's key and value
    setSceneProperties(propertiesCopy); //Set the sceneProperties state to copy
  }

  useEffect(() => {
    if (currentElement) {
      let allSceneElements = document.querySelectorAll(`.sceneC`);
      allSceneElements.forEach((element) => {
        if (element.id != currentElement.key) {
          element.style.border = "none";
        } else {
          element.style.border = "2px solid #B2B65E"; //Current Element's border
        }
      });
    }
  }, [currentElement]);

  return (
    <currentProperties.Provider value={sceneProperties}>
      <main className="flex justify-center w-screen">
        <div
          id="layout"
          className="mr-VW5 w-layout_themeW h-layout_themeH bg-layoutBg"
        >
          <p className="text-center text-2xl mb-4">Layout</p>
          <button
            className="border-white border-2 pl-8 pr-8 mb-2 rounded-md"
            onClick={handleNewHeader}
          >
            Header
          </button>
          <br />
          <button
            className="border-white border-2 pl-8 pr-8 rounded-md"
            onClick={handleNewFooter}
          >
            Footer
          </button>
        </div>
        <div>
          <div
            id="scene"
            className="flex-col w-sceneW h-sceneH mt-10 border-white border-2 rounded-sm"
          >
            <div id="header" className="basis-content">
              {sceneHeader}
            </div>
            <div id="moveable" className="grow">
              {" "}
              {elements}
            </div>
            <div id="footer" className="basis-content">
              {sceneFooter}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-10 h-20 border-white border-2"></div>
          </div>
          <div className="flex justify-center">
            <hr className="w-40"></hr>
          </div>
          <div className="flex justify-center gap-40 mt-10">
            <button className="border-white border-2 pl-1 pr-1 rounded-md">
              Export Theme
            </button>
            <button className="border-white border-2 pl-1 pr-1 rounded-md">
              Save Theme
            </button>
          </div>
        </div>
        <div
          id="theme"
          className="ml-VW5 w-layout_themeW h-layout_themeH bg-layoutBg"
        >
          <Properties
            newProperty={newProperty}
            currentElement={currentElement}
          />
        </div>
      </main>
    </currentProperties.Provider>
  );
}

//Elements header/footer adaption base
// if (!footerExists.current) {
//   event.target.classList.remove("bg-headerNoSelect");
//   event.target.classList.add("bg-headerSelect");
//   footerExists.current = true;
//   let newElement = <Footer key="footer" id="footer" />;
//   setElements([...elements, newElement]);
//   setCurrentElement(newElement);
// } else {
//   event.target.classList.remove("bg-headerSelect");
//   event.target.classList.add("bg-headerNoSelect");
//   footerExists.current = false;
//   let newElements = elements.filter((element) => {
//     if (element.key != "footer") {
//       return element;
//     }
//   });
//   setElements([newElements]);
// }
