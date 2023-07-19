"use client";
import { useContext } from "react";
import { currentElementContext } from "../app/context";

import Height from "./Properties/Height";
import Width from "./Properties/Width";
import Background from "./Properties/Background";
import Name_Delete from "./Properties/Name_Delete";

export default function Properties({
  newProperty,
  elements,
  setElements,
  setCurrentElement,
}) {
  const currentElement = useContext(currentElementContext);
  let propertyList = [];
  if (currentElement) {
    //----Remove box count from box id
    let type = currentElement.props.type;
    switch (type) {
      case "header":
      case "footer":
        propertyList = [
          <Height handleNewProperty={handleNewProperty} key="height" />,
          <Background handleNewProperty={handleNewProperty} key="background" />,
        ];
        break;
      case "box":
        propertyList = [
          <Name_Delete
            elements={elements}
            setElements={setElements}
            setCurrentElement={setCurrentElement}
            key="delete"
          />,
          <Height handleNewProperty={handleNewProperty} key="height" />,
          <Width handleNewProperty={handleNewProperty} key="width" />,
          <Background handleNewProperty={handleNewProperty} key="background" />,
        ];
        break;
    }
  }

  function handleNewProperty(value, property) {
    let newPropertys = {};
    newPropertys[property] = value;
    newProperty(newPropertys); //Calls home page's newProperty function and passes the as a paramater
  }

  return <div>{propertyList}</div>;
}
