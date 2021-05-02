
import React from "react"
import ToDoItem from "./ToDoItem"

export default App;


function App() {




    return (
      <div>
          <div className  = "to-do-list">
            <h1> A Simple Note Maker </h1>  
             <div >
                <form >
                   
                    <ToDoItem item ="Wake up at 7:00AM"/>

                    <ToDoItem item = "Go to UTD"/>

                    <ToDoItem item = "Get the Pfizer Vaccine"/>
 
                    <button type = "submit"> Add Task </button>

               </form>

             
            </div>
                            
         </div>
      </div>   
  );

}



