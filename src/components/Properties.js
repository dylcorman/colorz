"use client";

import Height from "./Properties/Height";
import Background from "./Properties/Background";

export default function Properties({ newProperty, currentElement }) {
  let propertyList = [];
  if (currentElement) {
    switch (currentElement.props.id) {
      case "header":
      case "footer":
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
