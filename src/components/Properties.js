"use client";

import Height from "./Properties/Height";
import Width from "./Properties/Width";
import Background from "./Properties/Background";
import Name_Delete from "./Properties/Name_Delete";

export default function Properties({
  newProperty,
  currentElement,
  elements,
  setElements,
  setCurrentElementState,
}) {
  let propertyList = [];
  if (currentElement) {
    //----Remove box count from box id
    let type = currentElement.props.id;
    let typeArray = currentElement.props.id.split("");
    typeArray.pop();
    if (typeArray.join("") === "box") {
      type = "box";
    }
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
            setCurrentElementState={setCurrentElementState}
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
