import React from 'react';
import Button from '@material-ui/core/Button';
import List from "./List"
import "./index.scss";




const WatchList = () => {

   const [inputValue, setInputValue] = React.useState('');
   const [toWach, setToWach] = React.useState([]);
   React.useEffect(() => {
      const local = localStorage.getItem("localWatch");
      const localList = JSON.parse(local);
      if (local !== null) {
         setToWach(localList);
      }
   }, [])

   React.useEffect(() => {
      localStorage.setItem("localWatch", JSON.stringify(toWach))
   }, [toWach])

   const _changeState = e => {
      setInputValue(e.target.value);
   }

   const _addTodo = e => {
      if (inputValue !== '') {
         setToWach(prev => {
            return (
               prev.concat(inputValue)
            )
         })
      }
   }
   const _handleDelete = item => {
      var removeTodo = toWach.filter((ele, id) => id !== item)
      setToWach(removeTodo)
   }

   const _clearAllTodo = () => {
      setToWach([])
   }

   return (
      <div className="list">
         <div className="list__title">Watch List</div>
         <input onChange={_changeState} value={inputValue} className="list__input" />
         <Button onClick={_addTodo} variant="contained" color="primary">
            Add Episode
         </Button>
         <Button onClick={_clearAllTodo} variant="contained" color="secondary">
            Remove all
         </Button>
         <List items={toWach} handleDelete={_handleDelete} />
      </div>
   )

};



export default WatchList;