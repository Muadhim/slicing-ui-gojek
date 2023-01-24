import React from "react";

const Card = (props) => {
    return(
        <div className={props.styleCard}>
            <div className={props.styleImg}><img src={props.img} alt="" /></div>
            <div className={props.styleHeader}>{props.header}</div>
            <div className={props.styleBody}>{props.body}</div>
        </div>
    )
}
export default Card