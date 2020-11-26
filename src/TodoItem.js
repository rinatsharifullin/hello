import React from 'react';
import ReactDom from 'react-dom';

export const TodoItem = ({id, labelName}) =>{
  return (
    <>
    <input type='checkbox' id={id}></input>
    <label htmlFor={id}>{labelName}</label><br></br>
    </>
  )
  
  // <h2>Privet</h2>
}