import { useState, useRef } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function AddTodo({ onNewItem }) {

  const newNameUpdate = useRef()
  const newDateUpdate = useRef()


  const handleAddButton = (event) => {
    event.preventDefault();
    const newName = newNameUpdate.current.value
    const newDate = newDateUpdate.current.value

    newNameUpdate.current.value = ""
    newDateUpdate.current.value = ""
    onNewItem(newName, newDate)
  }
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input ref={newNameUpdate} type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input ref={newDateUpdate} type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" >
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
