import React, { useState } from "react"
import "./ShowHide.css"

function ShowHide() {
    const [show, setShow] = React.useState(true)

    return (
        <div className="show-hide">
            <button onClick={() => setShow(!show)}>
                {show ? "Ocultar" : "Mostrar"} Foto
            </button>
            {show && <img src="./public/foto.jpg" alt="foto" />}
            </div>
    );
}

export default ShowHide