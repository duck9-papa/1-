import React,{useState} from "react";
import './App.css';
import Form from "./form/form";
import Layout from "./layout/layout";
import List from "./list/list";
import Todo from "./todo/todo";


function App() {


  const [inputValue,setInputValue] = useState('')
  const [workValue,setWorkValue] = useState('')
  const [doneValue,setDoneValue] = useState(false)
  const [totalList,setTotalList] = useState(
    [{id : 0, work : "Todo카드를 만들어 보자" , input : "Todo카드 만들기",done : false}]
  )

  const onRemove = (targetId) => {
    const newdone = totalList.filter((item) => {return item.id !== targetId});
    setTotalList(newdone);
    }

    const changeDone = (targetId) => {
          const changeState = totalList.map((item) => {
        if (item.id === targetId) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return { ...item };
        }
      })
      setTotalList(changeState)
    };

  // const changeDone = (targetId) =>{ 
  //   const changeState = totalList.filter((item)=>{return item.id === targetId})
  //   const remainState = totalList.filter((item)=>{return item.id !== targetId})
  //   setTotalList([...remainState,{id : changeState.id, work : changeState.work, input : changeState.input, done : !changeState.done}])
  // }



  const addItem=()=>{
    setTotalList([...totalList,{id : totalList.length+1,input : inputValue,work : workValue,done : doneValue}])
  }
  return(
    <main className="main">
      <header className="header">
      <span className="headerinput">
        <span className="headertext">제목</span><input type="text" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}}/>
      </span>
      <span className="headerinput">
      <span className="headertext">내용</span><input type="text" value={workValue} onChange={(event)=>{setWorkValue(event.target.value)}}/>
        </span>
      <button onClick={addItem} className="inputbutton">추가하기</button>
      </header>
      {<Form totalList={totalList} onRemove={onRemove} changeDone={changeDone}  />
      /*<span className="leftside">{totalList.map((item)=>{if(item.done===false){return <List item={item} onRemove={onRemove} changeDone={changeDone} key={item.id} />} */}
    {/* else {return null{"}"}})}</span> */}
      <Layout totalList={totalList} onRemove={onRemove} changeDone={changeDone} className="rightside"/>
      {/* <span className="leftside">{totalList.map((item)=>{if(item.done===true){return <Todo item={item} onRemove={onRemove} changeDone={changeDone} key={item.id} />}
    else {return null}})}</span> */}

    </main>
  );
  
}

export default App

