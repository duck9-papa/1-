import React from 'react';



function List({item,onRemove,changeDone}){    
    console.log(item)




    return(
<div className="todo-item" id={item.id}>
            <h1 className="card-text">{item.input}</h1>
            <h5 className="card-text">{item.work}</h5>
            <button className='leftbutton' onClick={()=>onRemove(item.id)}>삭제하기</button>
            <button className='rightbutton' onClick={()=>changeDone(item.id)}>완료하기</button>
            
        </div>
    )
}

export default List

//onClick={()=>{props.setTotalList([{id : props.item.id , input : props.item.input , work : props.item.work , done : 0}])}}