import { useContext, useState } from "react";

import { currentElementContext } from "../../app/context";

export default function Name_Delete({
  elements,
  setElements,
  setCurrentElementState,
}) {
  const currentElement = useContext(currentElementContext);
  const [nameDisplay, setNameDisplay] = useState(currentElement);

  let initialDisplay = nameDisplay; //Needed for initial load

  //----Deletes an element from the scene
  function handleDeleteElement() {
    let newElements = [];
    elements.forEach((element) => {
      //----If the element's key does not match the currentElement's key keep it
      if (element.key != currentElement) {
        newElements.push(element);
      }
    });
    setElements(newElements);
  }

  //----When user mouses on an element's name, change name div to an input
  function handleMouseOver() {
    setNameDisplay(
      <input
        className="text-black w-[70px]"
        placeholder={currentElement}
        onChange={handleNameChange}
      ></input>
    );
  }

  //----If user has entered a different name, update currentElement context
  function handleNameChange(event) {
    if (event.target.value) {
      setCurrentElementState(event.target.value);
    }
  }

  //----When user mouses off an element's name, change input to name div
  function handleMouseOut() {
    setNameDisplay(currentElement);
  }

  return (
    <div className="bg-[#909090] flex justify-between">
      <div
        className="pl-2 w-[70px]"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {initialDisplay ? nameDisplay : currentElement}
      </div>
      <button className="text-[#771616] pr-2" onClick={handleDeleteElement}>
        Delete
      </button>
    </div>
  );
}
