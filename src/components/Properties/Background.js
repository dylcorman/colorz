"use client";
import { useState, useRef } from "react";

import ColorPicker from "./ColorPicker";

export default function Background({ handleNewProperty }) {
  const [showPicker, setShowPicker] = useState(false); //Determines if the color picker should be shown
  const [color, setColor] = useState("#fff");
  const bgColorRef = useRef(); //Ref assigned to hex color input

  //----Handles new input from color picker
  const handleChangeComplete = (color) => {
    setColor(color.hex);
    bgColorRef.current.value = color.hex.toUpperCase();
    handleNewProperty(color.hex.toUpperCase(), "backgroundColor");
  };

  //----Toggles the color picker element
  function handleColorPicker() {
    setShowPicker(!showPicker);
  }

  return (
    <>
      <p>Background Color:</p>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="#FFFFFF"
          ref={bgColorRef}
          onChange={(event) =>
            handleNewProperty(event.target.value, "backgroundColor")
          }
          className="text-white bg-slate-600 rounded-md w-[70px]"
        />
        <button
          className="colorPickButton text-sm pl-1 pr-1 text-slate-200 rounded-md"
          onClick={handleColorPicker}
        >
          Color Picker
        </button>
      </div>
      <ColorPicker
        show={showPicker}
        handleChangeComplete={handleChangeComplete}
        color={color}
      />
    </>
  );
}
