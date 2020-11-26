import React from 'react';
import ReactDom from 'react-dom';

import {TodoItem} from './TodoItem';

const App = ()=>{
  return (
    <>
    <TodoItem id="react1" labelName='React to learn'/>
    <TodoItem id="react2" labelName='Typescript to learn'/>
    </>
  )
  
}
ReactDom.render(<App/>, document.getElementById('root'))