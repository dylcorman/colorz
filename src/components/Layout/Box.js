import { useContext, useState, useRef } from "react";

import { currentProperties } from "../../app/context";
import Draggable from "react-draggable";

export default function Box({ id, setCurrentElement, top, left }) {
  const newProperties = useContext(currentProperties);

  //----Element's default properties
  let defaultProperties = {
    height: "50px",
    width: "50px",
    top: "0px",
    left: "0px",
    backgroundColor: "#2A2A2A",
  };

  //----If this element's id matches the user's currently selected element id assign new property values
  for (let element in newProperties) {
    if (element === id) {
      for (let property in newProperties[element]) {
        defaultProperties[property] = newProperties[element][property];
      }
    }
  }

  //----Component to return (defined as a variable to allow the currentElement state to access it)
  let component = (
    <div
      className={`sceneC w-[50px] h-[50px] bg-[#696767]`}
      style={defaultProperties}
      key={id}
      id={id}
      onClick={updateCurrentElement}
    ></div>
  );

  //----Updates current element to be this one
  function updateCurrentElement() {
    setCurrentElement(component);
  }

  return <Draggable bounds="parent">{component}</Draggable>;
}
