"use client";

import Height from "./Height";
import Background from "./Background";

export default function Properties({ newProperty, currentElement }) {
  let propertyList = [];
  if (currentElement) {
    switch (currentElement.key) {
      case "header":
        propertyList = [
          <Height handleNewProperty={handleNewProperty} />,
          <Background handleNewProperty={handleNewProperty} />,
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
