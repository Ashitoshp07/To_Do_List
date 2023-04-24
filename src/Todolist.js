import React, { useState } from 'react'

function Todolist() {
 const [activity,setactivity]= useState("");
 const[listData,setlistData]= useState([]);
 function addActivity(){
    // setlistData([...listData,activity])
    // console.log(listData)
    setlistData((listData)=>{
        const updatedList=[...listData,activity]
        console.log(updatedList)
        setactivity("");
        return updatedList
    })
 }
 function removeActivity(i){
    const updatedListData=listData.filter((elem,id)=>{   return i!=id;})
     setlistData(updatedListData); 

 }
 function removeAll(){
    setlistData([]);

 }

  return (
    <>
    <div className='container'>
        <div className='header'>Todo List </div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setactivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'> Heare is your list :{")"}</p>
        {listData!=[]&& listData.map((data,i)=>{
          return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'>
                <button onClick={()=>removeActivity(i)}>remove(-)</button>
                </div>
               
            </p>
            </>
          )  
        })}
        {
            listData.length>=1&&
            <button onClick={removeAll}>Remove All</button>
        }
     
    </div>
    
    </>
  )
}

export default Todolist