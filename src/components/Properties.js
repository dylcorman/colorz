"use client";

import Height from "./Properties/Height";
import Background from "./Properties/Background";

export default function Properties({ newProperty, currentElement }) {
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
          <Height handleNewProperty={handleNewProperty} key="height" />,
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
