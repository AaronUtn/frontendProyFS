import React from "react";
const NovedadItem = (props) => {
    const{title, subtitle, imagen, body} = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img className="novedad-imagen" src={imagen} alt={title}/>
            <div dangerouslySetInnerHTML={{__html:body}}></div>
        </div>
    );
}

export default NovedadItem;