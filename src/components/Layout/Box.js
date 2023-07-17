import { useContext, useState, useRef } from "react";

import { currentProperties } from "../../app/context";
import { Rnd } from "react-rnd";

export default function Box({ id, setCurrentElement }) {
  //----Context
  const newProperties = useContext(currentProperties);

  //----State
  const [x, setX] = useState(100); //The box's x position relative to its parent
  const [y, setY] = useState(100); //The box's y position relative to its parent
  const [width, setWidth] = useState("50px"); //The box's width
  const [height, setHeight] = useState("50px"); //The box's height

  //----Element's default properties
  let defaultProperties = {
    backgroundColor: "#2A2A2A",
  };

  //----Component to return (defined as a variable to allow the currentElement state to access it)
  let component = (
    <Rnd
      key={id}
      id={id}
      className={`sceneC bg-[#696767]`}
      style={defaultProperties}
      bounds={"parent"}
      size={{
        width: width,
        height: height,
      }}
      position={{ x: x, y: y }}
      onDragStop={(e, d) => {
        setX(d.x);
        setY(d.y);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(ref.style.width);
        setHeight(ref.style.height);
        setX(position.x);
        setY(position.y);
      }}
      onDrag={updateCurrentElement}
      onResize={updateCurrentElement}
      onClick={updateCurrentElement}
    ></Rnd>
  );

  //----If this element's id matches the user's currently selected element id assign new property values
  for (let element in newProperties) {
    if (element === id) {
      for (let property in newProperties[element]) {
        if (property != "width" && property != "height") {
          defaultProperties[property] = newProperties[element][property];
        } else if (property === "width") {
          component.props.size.width = newProperties[element][property];
          delete newProperties[element][property]; //Prevents above line from resetting a user resize
        } else if (property === "height") {
          component.props.size.height = newProperties[element][property];
          delete newProperties[element][property]; //Prevents above line from resetting a user resize
        }
      }
    }
  }

  //----Updates current element to be this one
  function updateCurrentElement() {
    setCurrentElement(component);
  }

  return component;
}
