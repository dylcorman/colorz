import { Rnd } from "react-rnd";
import { useContext, useState, useEffect } from "react";

import { currentProperties } from "../../app/context";
import { currentElementContext } from "../../app/context";

export default function TextBox({ id, setCurrentElement, handleNewProperty }) {
    //----Context
    const newProperties = useContext(currentProperties);
    const currentElement = useContext(currentElementContext);

    //----State
    const [x, setX] = useState(100);
    const [y, setY] = useState(100);
    const [width, setWidth] = useState("150px");
    const [height, setHeight] = useState("50px");
    const [text, setText] = useState("Enter text...");

    //----Element's default properties
    let defaultProperties = {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        fontSize: "16px",
        padding: "10px",
        border: "1px solid #ccc"
    };

    //----If this element's id matches the theme element's id assign new property values,
    for (let element in newProperties) {
        if (element === id) {
            for (let property in newProperties[element]) {
                if (property !== "width" && property != "height" && property !== "text") {
                    defaultProperties[property] = newProperties[element][property];
                }
            }
        }
    }

    useEffect(() => {
        for (let element in newProperties) {
            if (element === id && element === currentElement.props.id) {
                for (let property in newProperties[element]) {
                    if (property === "width") {
                        setWidth(newProperties[element][property]);
                    } else if (property === "height") {
                        setHeight(newProperties[element][property]);
                    } else if (property === "text") {
                        setText(newProperties[element][property]);
                    }
                }
            }
        }
    }, [newProperties]);

    let component = (
        <Rnd
            key={id}
            id={id}
            type="textbox"
            className={`sceneC`}
            style={defaultProperties}
            bounds={"parent"}
            size={{ width: width, height: height }}
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
        >
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: 'transparent',
                    resize: 'none',
                    fontSize: defaultProperties.fontSize,
                    color: defaultProperties.color,
                    padding: defaultProperties.padding
                }}
            />
        </Rnd>
    );

    function updateCurrentElement() {
        setCurrentElement(component);
    }

    return component;
}
