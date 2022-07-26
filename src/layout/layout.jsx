import React from "react";
import Todo from "../list/list";

function Layout({totalList,onRemove,changeDone}){


    return (
      <div>
      <h1 className="leftside">Done!</h1>
      <span className="leftside">{totalList.map((item)=>{if(item.done===true){return <Todo item={item} onRemove={onRemove} changeDone={changeDone} key={item.id} />}
      else {return null}})}</span>
  
    </div>
    )
}
export default Layout