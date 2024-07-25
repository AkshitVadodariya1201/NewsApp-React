import React from "react";
import loader from "./loader.gif";

export default function Spinner() {
    return (
        <div className="text-center">
            <img className="my-3" src={loader} alt="loader" />
        </div>
    );
}
