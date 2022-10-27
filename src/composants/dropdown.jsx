import {useState} from "react";

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false)
    if (isOpen === true) {
        if (typeof props.texte === "string") {
            return (
                <button className="dropdown" onClick={() => setIsOpen(false)}>{props.title}
                    <p>{props.texte}</p>
                </button>
            )
        } else {
          return (
            <button className="dropdown" onClick={() => setIsOpen(false)}>{props.title}
                    {props.texte.map((data) =>
                    <p key={data}>{data}</p>
                    )}
            </button>
          )
        }
    } else {
        return (
            <button className="dropdown" onClick={() => setIsOpen(true)}>{props.title}</button>
        )
    }
}