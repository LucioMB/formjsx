import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";

import "../../css/indexForm.css";


export function Loading({ text, onClick, loading }) {
    return (
        <button onClick={onClick} disabled={loading ? "disabled" : undefined} className="inputSubmit">
        <span>
            {loading ? <FontAwesomeIcon className="faIcon" icon={faFan} /> : undefined}
        </span>
            {text}
        </button>
    );
}
