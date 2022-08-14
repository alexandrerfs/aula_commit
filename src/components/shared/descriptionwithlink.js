import React, {Fragment} from "react";


const DescriptionWithLink = (props)=>{

    if(!props.descricao){
        return null;
    }
   
   if(props.link){
    return (
        
        <Fragment>
        <p>{props.descricao}</p>
        <p>
        <a href={props.link}>{props.link}</a>
        </p>
        </Fragment>
    )
   
}else{
    
    return (
        
    <Fragment>
    <p><u>{props.descricao}</u></p>
    </Fragment>
    )
}}

    



export default DescriptionWithLink