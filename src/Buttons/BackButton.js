import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return(
        <button type="button" onClick={() => navigate(-1)}>
            Go Back
        </button>
    );
}

export default BackButton;