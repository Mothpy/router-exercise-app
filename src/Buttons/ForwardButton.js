import React from "react";
import { useNavigate } from "react-router-dom";

function ForwardButton() {
    const navigate = useNavigate();
    return(
        <button type="button" onClick={() => navigate(1)}>
            Go Forward
        </button>
    );
}

export default ForwardButton;