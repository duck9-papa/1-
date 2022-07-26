import React from "react";
import List from "../list/list";

function Form({totalList,onRemove,changeDone}){

    return (
        <div>
    <h1 className="leftside">Working...</h1>
    <span className="leftside">{totalList.map((item)=>{if(item.done===false){return <List item={item} onRemove={onRemove} changeDone={changeDone} key={item.id} />}
    else {return null}})}</span>

  </div>
    )
}
export default Form