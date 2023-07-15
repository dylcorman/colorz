import { useContext } from "react";

import { currentProperties } from "../app/context";

export default function HeaderInfinite({ id }) {
  const newProperties = useContext(currentProperties);

  //----Element's default properties
  let defaultProperties = {
    height: "20px",
    background: "#2A2A2A",
  };
  console.log("------------", newProperties);

  //----If this element's id (key) matches the user's currently selected element id assign new property values and show s
  if (newProperties.elementKey === id) {
    for (let key in newProperties) {
      if (key != "elementKey") {
        defaultProperties[key] = newProperties[key]; //Assign new value to key
      }
    }
  }
  return (
    <div
      className={`w-sceneW text-black text-center`}
      style={defaultProperties}
    >
      Header
    </div>
  );
}
